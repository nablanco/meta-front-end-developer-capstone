import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

test("renders First Name label", () => {
  render(<App />);

  const reservationsButton = screen.getAllByText("Reservations");
  fireEvent.click(reservationsButton[0]);

  expect(screen.getByLabelText("First Name:")).toBeInTheDocument();
});
