import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("when checkbox is checked button is disabled", () => {
    render(<App />);
    // get checkbox
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: /change to red/i });
    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
  });
});
