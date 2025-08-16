// src/components/DataTable/DataTable.tsx
import React, { useMemo, useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean; // multiple selection
  onRowSelect?: (selectedRows: T[]) => void;
}

type SortDir = "asc" | "desc" | null;

function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  // Sort logic
  const sortedData = useMemo(() => {
    if (!sortKey || !sortDir) return data;
    const copy = [...data];
    copy.sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      // Basic comparator (string/number); extend if needed
      if (va == null && vb == null) return 0;
      if (va == null) return sortDir === "asc" ? -1 : 1;
      if (vb == null) return sortDir === "asc" ? 1 : -1;

      if (typeof va === "number" && typeof vb === "number") {
        return sortDir === "asc" ? va - vb : vb - va;
      }
      // fallback to string compare
      return sortDir === "asc"
        ? String(va).localeCompare(String(vb))
        : String(vb).localeCompare(String(va));
    });
    return copy;
  }, [data, sortKey, sortDir]);

  // Selection callback
  useEffect(() => {
    if (!onRowSelect) return;
    const rows = [...selected].map((idx) => sortedData[idx]).filter(Boolean);
    onRowSelect(rows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, sortedData]);

  // Handlers
  const toggleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const key = col.dataIndex;
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      // cycle asc -> desc -> none
      setSortDir(sortDir === "asc" ? "desc" : sortDir === "desc" ? null : "asc");
      if (sortDir === "desc") setSortKey(null);
    }
  };

  const allSelected = selectable && selected.size === sortedData.length && sortedData.length > 0;
  const someSelected = selectable && selected.size > 0 && selected.size < sortedData.length;

  const handleToggleAll = (checked: boolean) => {
    if (!selectable) return;
    if (checked) {
      setSelected(new Set(sortedData.map((_, i) => i)));
    } else {
      setSelected(new Set());
    }
  };

  const handleToggleRow = (rowIndex: number) => {
    if (!selectable) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(rowIndex)) next.delete(rowIndex);
      else next.add(rowIndex);
      return next;
    });
  };

  const colCount = columns.length + (selectable ? 1 : 0);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
      aria-busy={loading ? "true" : "false"}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          overflowX: "auto",     // responsive horizontal scroll
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 2,
        }}
        aria-label="data table"
        role="table"
      >
        <Table size="medium" stickyHeader>
          <TableHead>
            <TableRow role="row">
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    inputProps={{ "aria-label": "select all rows" }}
                    indeterminate={someSelected}
                    checked={allSelected}
                    onChange={(e) => handleToggleAll(e.target.checked)}
                  />
                </TableCell>
              )}
              {columns.map((col) => {
                const isActiveSort = sortKey === col.dataIndex && col.sortable;
                const sortLabel =
                  col.sortable && isActiveSort
                    ? sortDir === "asc"
                      ? " (sorted asc)"
                      : sortDir === "desc"
                      ? " (sorted desc)"
                      : ""
                    : "";
                return (
                  <TableCell
                    key={col.key}
                    onClick={() => toggleSort(col)}
                    sx={{
                      cursor: col.sortable ? "pointer" : "default",
                      userSelect: "none",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                    aria-sort={
                      col.sortable
                        ? sortKey !== col.dataIndex
                          ? "none"
                          : sortDir === "asc"
                          ? "ascending"
                          : sortDir === "desc"
                          ? "descending"
                          : "none"
                        : undefined
                    }
                    role="columnheader"
                    scope="col"
                  >
                    {col.title}
                    {col.sortable && (
                      <Box component="span" sx={{ opacity: 0.6, ml: 0.5, fontSize: 12 }}>
                        {isActiveSort ? (sortDir === "asc" ? "▲" : sortDir === "desc" ? "▼" : "—") : "↕"}
                      </Box>
                    )}
                    <Box component="span" sx={{ position: "absolute", left: -10000 }}>
                      {sortLabel}
                    </Box>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {!loading && sortedData.length === 0 && (
              <TableRow role="row">
                <TableCell colSpan={colCount} align="center" role="cell">
                  No data
                </TableCell>
              </TableRow>
            )}

            {!loading &&
              sortedData.map((row, i) => {
                const isSelected = selectable && selected.has(i);
                return (
                  <TableRow
                    key={i}
                    hover
                    selected={isSelected}
                    onClick={() => handleToggleRow(i)}
                    role="row"
                    aria-selected={isSelected ? "true" : "false"}
                    sx={{ cursor: selectable ? "pointer" : "default" }}
                  >
                    {selectable && (
                      <TableCell padding="checkbox" role="cell">
                        <Checkbox
                          checked={isSelected}
                          onChange={() => handleToggleRow(i)}
                          inputProps={{ "aria-label": `select row ${i + 1}` }}
                        />
                      </TableCell>
                    )}
                    {columns.map((col) => (
                      <TableCell key={col.key} role="cell">
                        {String(row[col.dataIndex] ?? "")}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

        {loading && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              bgcolor: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(1px)",
              borderRadius: 2,
            }}
            aria-label="loading"
          >
            <CircularProgress />
          </Box>
        )}
      </TableContainer>
    </Box>
  );
}

export default DataTable;
