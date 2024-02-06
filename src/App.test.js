import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders First Name label", () => {
  render(<App />);

  const reservationsButton = screen.getAllByText("Reservations");
  fireEvent.click(reservationsButton[0]);

  expect(screen.getByLabelText("First Name:")).toBeInTheDocument();
});
