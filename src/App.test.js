import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.scrollTo = jest.fn();
});

describe("APP Component", () => {
  test("renders SC or home page link", () => {
    render(<App />);

    const scLink = screen.getByRole("link", { name: "SC" });

    expect(scLink).toBeInTheDocument();
    expect(scLink).toHaveAttribute("href", "/");
  });
});
