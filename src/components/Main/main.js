import './main.css'

import Homepage from './Homepage/homepage';
import ReservationsContainer from './Reservations/reservationsContainer';

import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/reservations" element={<ReservationsContainer />}></Route>
        </Routes>
    </main>
  )
}

export default Main;