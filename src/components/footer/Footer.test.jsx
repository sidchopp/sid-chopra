import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  test("render email Link", () => {
    render(<Footer />);

    const emailLink = screen.getByRole("link", { name: /sidchopp@gmail.com/i });

    expect(emailLink).toBeInTheDocument();
  });

  test("render location", () => {
    render(<Footer />);

    const location = screen.getByText(/calgary - ab/i); // \s* matches zero or more whitespace characters

    expect(location).toBeInTheDocument();
  });

  test("render disclaimer", () => {
    render(<Footer />);

    const disclaimer = screen.getByText(/© 2024. all rights reserved./i);

    expect(disclaimer).toBeInTheDocument();
  });
});
