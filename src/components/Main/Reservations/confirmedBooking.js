import "./confirmedBooking.css";

const ConfirmedBooking = (props) => {
  return (
    <section className="confirmation-container">
      <h1 className="confirmation-header">Confirmed!</h1>
      <p className="confirmation-body">
        Thanks
        {props.firstName && props.lastName
          ? " " + props.firstName + " " + props.lastName
          : ""}
        ! We have set your reservation for {props.guests} on {props.date} at{" "}
        {props.time}. We also sent a confirmation email to: {props.email}
      </p>
    </section>
  );
};

export default ConfirmedBooking;
