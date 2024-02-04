import "./bookingPage.css";
import BookingForm from "./bookingForm";

const BookingPage = (props) => {
  return (
    <section className="booking-page">
      <BookingForm props={props} />
    </section>
  );
};

export default BookingPage;
