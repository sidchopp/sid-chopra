import { render, screen } from "@testing-library/react";
import { MyProjects } from "./MyProjects";

describe("My Projects Component", () => {
  test("render heading", () => {
    render(<MyProjects />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/my projects/i);
  });

  test("render my projects", () => {
    render(<MyProjects />);

    const projectLinks = screen.getAllByRole("link");
    const projectsHeading = screen.getAllByRole("heading", { level: 3 });

    expect(projectsHeading).toHaveLength(14);
    expect(projectLinks).toHaveLength(14);
  });
});
