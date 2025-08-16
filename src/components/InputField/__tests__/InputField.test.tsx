import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../InputField";

describe("InputField", () => {
  it("renders with placeholder", () => {
    render(<InputField placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("updates value when typing", () => {
    render(<InputField placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });

  it("respects disabled prop", () => {
    render(<InputField placeholder="Disabled" disabled />);
    const input = screen.getByPlaceholderText("Disabled");
    expect(input).toBeDisabled();
  });
});
