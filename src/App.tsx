import React, { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DataTable, { type Column } from "./components/DataTable";
import InputField from "./components/InputField/InputField";
import Button from "./components/Button/button";

type User = { id: number; name: string; age: number };

const theme = createTheme({ palette: { mode: "light" } });

function App() {
  const [filter, setFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  const data: User[] = [
    { id: 1, name: "Alice", age: 23 },
    { id: 2, name: "Bob", age: 31 },
    { id: 3, name: "Charlie", age: 28 },
  ];

  // Apply filter
  const filtered = useMemo(
    () =>
      data.filter((d) =>
        d.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [data, filter]
  );

  const columns: Column<User>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          padding: 24,
          display: "grid",
          gap: 20,
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {/* Input Field */}
        <InputField
          label="Filter by name"
          placeholder="Type a name to filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          clearable
          size="sm"
        />

        {/* Data Table */}
        <DataTable<User>
          data={filtered}
          columns={columns}
          selectable
          onRowSelect={(rows) => setSelectedRows(rows)}
        />

        {/* Button */}
        <Button
          label="Log selected rows"
          onClick={() => console.log("Selected Rows:", selectedRows)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
