import { render, screen } from "@testing-library/react";
import { Technologies } from "./Technologies";
import { techIcons } from "./techIcons";

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

    techIcons.forEach((tech) => {
      const icon = screen.getByLabelText(tech.label);
      expect(icon).toBeInTheDocument();
    });

    const gridItems = screen.getAllByTestId("tech-icon");

    expect(gridItems).toHaveLength(13);
  });
});
