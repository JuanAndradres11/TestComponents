import { render, screen, fireEvent } from "@testing-library/react";
import DataTable, { type Column } from "../DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

describe("DataTable", () => {
  it("renders rows", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("shows empty state", () => {
    render(<DataTable data={[]} columns={columns} />);
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(<DataTable data={[]} columns={columns} loading />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("selects a row when clicked", () => {
    const onRowSelect = vi.fn();
    render(<DataTable data={data} columns={columns} selectable onRowSelect={onRowSelect} />);
    fireEvent.click(screen.getByText("Alice"));
    expect(onRowSelect).toHaveBeenCalledWith([{ id: 1, name: "Alice", age: 25 }]);
  });

  it("sorts by column when header clicked", () => {
    render(<DataTable data={data} columns={columns} />);
    fireEvent.click(screen.getByText("Age"));
    // after first click Bob (30) should appear before Alice (25)
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("Bob");
  });
});
