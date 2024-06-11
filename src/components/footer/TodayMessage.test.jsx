import { render, screen } from "@testing-library/react";
import { TodayMessage } from "./TodayMessage";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = days[new Date().getDay()];

describe("TodayMessage Component", () => {
  test("render today", () => {
    render(<TodayMessage />);

    const messageElement = screen.getByText(/hope you are enjoying/i);
    const todayElement = screen.getByText(new RegExp(today, "i"));

    expect(messageElement).toBeInTheDocument();
    expect(todayElement).toBeInTheDocument();
  });
});
