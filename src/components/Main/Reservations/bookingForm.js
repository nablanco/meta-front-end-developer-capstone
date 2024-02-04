import "./bookingForm.css";

import { HashLink } from "react-router-hash-link";

const BookingForm = ({ props }) => {
  return (
    <form className="booking-form-container">
      {console.log(props)}
      <h1 className="booking-header">
        Please enter your details below to set a reservation:
      </h1>
      <div id="name-container" className="client-details-container">
        <label
          htmlFor="firstname"
          className="detail-label"
          id="first-name-label"
        >
          First Name:
          <input
            name="firstName"
            id="firstName"
            type="text"
            className="detail-input"
            value={props.firstName}
            onChange={(e) => {
              props.setFirstName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="lastName" className="detail-label" id="last-name-label">
          Last Name:
          <input
            name="lastName"
            id="lastName"
            type="text"
            className="detail-input"
            value={props.lastName}
            onChange={(e) => {
              props.setLastName(e.target.value);
            }}
          />
        </label>
      </div>
      <div id="email-phone-container" className="client-details-container">
        <label htmlFor="email" className="detail-label" id="email-label">
          Email:
          <input
            name="email"
            id="email"
            type="email"
            className="detail-input"
            value={props.email}
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="phoneNumber" className="detail-label" id="phone-label">
          Phone:
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            className="detail-input"
            value={props.phoneNumber}
            onChange={(e) => {
              props.setPhoneNumber(e.target.value);
            }}
          />
        </label>
      </div>
      <label className="guests-label" id="guests-label">
        Number of guests:
        <input
          name="guests"
          id="guests"
          type="number"
          className="guests-input"
          value={props.guests}
          onChange={(e) => {
            props.setGuests(e.target.value);
          }}
          min="1"
          max="8"
        />
      </label>
      <label className="date-label" id="date-label">
        Date:
        <input
          name="date"
          id="date"
          type="date"
          className="date-input"
          value={props.date}
          onChange={(e) => {
            props.setDate(e.target.value);
            props.handleTimeDispatch(e.target.value);
          }}
        />
      </label>
      <label className="time-label" id="phone-label">
        Time:
        <select
          name="timeList"
          id="timeList"
          type="tel"
          className="time-input"
          value={props.time}
          onChange={(e) => {
            props.setTime(e.target.value);
          }}
        >
          {props.timeListState.availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
      </label>
      <HashLink to="/confirmation" className="submit-button-link">
        Submit
      </HashLink>
    </form>
  );
};

export default BookingForm;
