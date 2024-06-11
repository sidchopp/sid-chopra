import { render, screen } from "@testing-library/react";
import { Technologies } from "./Technologies";

describe("Technologies Component", () => {
  test("Render heading", () => {
    render(<Technologies />);

    const heading = screen.getByRole("heading", {
      level: 2,
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/core technologies/i);
  });
  test("Render list of Core Technologies", () => {
    render(<Technologies />);

    const gridItems = screen.getAllByTestId("tech-icon");

    expect(gridItems).toHaveLength(12);
  });
});
