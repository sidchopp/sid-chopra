import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Hero } from "./Hero";

test("It shows Resume Link", () => {
  // Render the component within a MemoryRouter as we are using Router for Link
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  // Manipulate the component or find an element in it - Find My Resume Link
  const resumeLink = screen.getByRole("link", { name: /my resume/i });

  // Assertions - make sure the component is doing what we expect it to do
  expect(resumeLink).toBeInTheDocument();
});

test("to show correct name", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading", { level: 2 });

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/^Siddharth Chopra$/i);
});
