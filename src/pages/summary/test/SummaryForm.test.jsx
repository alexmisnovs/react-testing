import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("<SummaryForm />", () => {
  test("checkbox is unchecked and button is disabled by default", () => {
    render(<SummaryForm />);
    // get checkbox
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: /Confirm Order/i });
    expect(checkbox).not.toBeChecked();
    // checkbox is uncheced by default, button to be disabled by default
    expect(button).toBeDisabled();
  });

  test("checkbox enables the button:", () => {
    render(<SummaryForm />);
    // get checkbox
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: /Order/i });

    // checkbox is uncheced by default, button to be disabled by default
    // checkbox enables the button:
    userEvent.click(checkbox);
    expect(button).toBeEnabled();
  });
  test("unchecking checkbox disables the button", () => {
    render(<SummaryForm />);
    // get checkbox
    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
    const button = screen.getByRole("button", { name: /Order/i });

    userEvent.click(checkbox);
    expect(button).toBeEnabled();

    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
  test("Popover displays on hover", async () => {
    //Popover is hidden on loads
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(/No iceream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    //Popover appears upong  the mouse over
    const termsText = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsText);

    const popover = screen.getByText(/No iceream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // Popover dissapears when we mouse out
    userEvent.unhover(termsText);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/No iceream will actually be delivered/i)
    );
  });
});
