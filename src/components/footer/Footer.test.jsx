import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  test("render email Link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const emailLink = screen.getByRole("link", { name: /let's chat/i });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:sidchopp@gmail.com");
  });

  test("render location", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const location = screen.getByText(/based in calgary/i); // \s* matches zero or more whitespace characters

    expect(location).toBeInTheDocument();
  });

  test("render disclaimer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const disclaimer = screen.getByText(/© 2024. Siddharth Chopra/i);

    expect(disclaimer).toBeInTheDocument();
  });

  test("render links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole("link", { name: /about/i });
    const projectsLink = screen.getByRole("link", { name: /projects/i });
    const resumeLink = screen.getByRole("link", { name: /résumé/i });

    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();

    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(projectsLink).toHaveAttribute("href", "/projects");
    expect(resumeLink).toHaveAttribute("href", "/resume");
  });
});
