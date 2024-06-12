import { render, screen } from "@testing-library/react";
import { Technologies } from "./Technologies";

const technologies = [
  "React",
  "Next",
  "Node",
  "AWS",
  "TypeScript",
  "JavaScript",
  "Express",
  "MongoDB",
  "GraphQL",
  "Contentful",
  "HTML5",
  "CSS3",
  "Jest",
];

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

    technologies.forEach((tech) => {
      const icon = screen.getByLabelText(tech);
      expect(icon).toBeInTheDocument();
    });

    const gridItems = screen.getAllByTestId("tech-icon");

    expect(gridItems).toHaveLength(13);
  });
});
