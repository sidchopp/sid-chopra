import { render, screen } from "@testing-library/react";
import { MyProjectCard } from "./MyProjectCard";

const project = {
  description: "Hello World",
  id: "1",
  img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  techUsed: "MERN",
  title: "Fitness",
  website: "https://mern-workout-app-ecru.vercel.app/",
};

describe("My Project Card", () => {
  test("render Image", () => {
    render(<MyProjectCard project={project} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

  test("render heading", () => {
    render(<MyProjectCard project={project} />);

    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
  });

  test("render 2 paragraphs", () => {
    render(<MyProjectCard project={project} />);

    const paragraphs = screen.getAllByRole("paragraph");

    expect(paragraphs).toHaveLength(2);
  });
});
