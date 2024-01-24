import './main.css'

import Homepage from './Homepage/homepage';
import BookingPage from './Reservations/bookingPage';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/reservations" element={<BookingPage />}></Route>
        </Routes>
    </main>
  )
}

export default Main;