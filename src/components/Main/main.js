import "./main.css";
import Homepage from "./Homepage/homepage";
import BookingPage from "./Reservations/bookingPage";
import ConfirmedBooking from "./Reservations/confirmedBooking";
import fakeAPI from "../../API/fakeAPI";

import { useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";

const defaultDate = new Date();

const initialTimes = {
  availableTimes: ["19:00", "20:00", "21:00", "22:00"],
  selectedDate: defaultDate.toLocaleDateString("en-CA"),
};

const timesReducer = (state, action) => {
  const userSubmittedDateObject = new Date(action.payload);

  switch (action.type) {
    case "UPDATE_TIMES":
      const updateTimes = fakeAPI.fetchAPI(userSubmittedDateObject);
      return {
        availableTimes: updateTimes,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};

const Main = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [guests, setGuests] = useState("1");
  const [date, setDate] = useState(defaultDate.toLocaleDateString("en-CA"));
  const [time, setTime] = useState(initialTimes.availableTimes[0]);
  const [timeListState, dispatch] = useReducer(timesReducer, initialTimes);

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", payload: timeListState.selectedDate });
    // eslint-disable-next-line
  }, []);

  const handleTimeDispatch = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const submitForm = () => {
    return fakeAPI.submitAPI();
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              guests={guests}
              setGuests={setGuests}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              timeListState={timeListState}
              handleTimeDispatch={handleTimeDispatch}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <ConfirmedBooking
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
              guests={guests}
              date={date}
              time={time}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
