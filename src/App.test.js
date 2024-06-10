import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SC or home page link", () => {
  render(<App />);

  const scLink = screen.getByRole("link", { name: "SC" });

  expect(scLink).toBeInTheDocument();
  expect(scLink).toHaveAttribute("href", "/");
});

test("renders About page link", () => {
  render(<App />);

  const aboutLink = screen.getByRole("link", { name: "About" });

  expect(aboutLink).toBeInTheDocument();
  expect(aboutLink).toHaveAttribute("href", "/about");
});

test("renders Projects page link", () => {
  render(<App />);

  const projectsLink = screen.getByRole("link", { name: "Projects" });

  expect(projectsLink).toBeInTheDocument();
  expect(projectsLink).toHaveAttribute("href", "/projects");
});

test("renders Resume page link", () => {
  render(<App />);

  const resumeLink = screen.getByRole("link", { name: "My Resume" });

  expect(resumeLink).toBeInTheDocument();
  expect(resumeLink).toHaveAttribute("href", "/resume");
});
