import { screen, render } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

describe("HeroImage Component", () => {
  test("Render Image", () => {
    render(<HeroImage inView={true} />);

    const imgElement = screen.getByRole("img", { name: /sid/i });

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/home.jpg");
  });
});
