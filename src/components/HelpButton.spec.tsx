import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HelpButton } from "./HelpButton";

describe("HelpButton", () => {
  it("renders CTA only without clicking", async () => {
    render(<HelpButton />);

    expect(screen.getByText("help_button.cta")).toBeInTheDocument();
    expect(
      screen.queryByText("help_button.description")
    ).not.toBeInTheDocument();
  });

  it("displays description after clicking", async () => {
    render(<HelpButton />);

    expect(screen.getByText("help_button.cta")).toBeInTheDocument();
    expect(
      screen.queryByText("help_button.description")
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByText("help_button.cta"));

    expect(screen.getByText("help_button.description")).toBeInTheDocument();
  });
});
