import { render, screen } from "@testing-library/react";
import BookingForm from "./bookingForm";

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
  render(<BookingForm />);
  const labelElement = screen.getByText("First Name");
  expect(labelElement).toBeInTheDocument();
});
