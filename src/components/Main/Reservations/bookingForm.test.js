import { render, screen } from "@testing-library/react";
import BookingForm from "./bookingForm";
import Main from "../main";

const props = {
  firstName: "",
  setFirstName: "",
  lastName: "",
  setLastName: "",
  email: "",
  setEmail: "",
  phoneNumber: "",
  setPhoneNumber: "",
  guests: "",
  setGuests: "",
  date: "",
  setDate: "",
  time: "",
  setTime: "",
  state: "",
  dispatch: "",
};

test("renders First Name label", () => {
  render(<Main />);
  const labelElement = screen.getByText("First Name");
  expect(labelElement).toBeInTheDocument();
});
