import {
  HomePage,
  MovieDetailsPage,
  BuyTicketsPage,
  SeatBookingPage,
} from "./Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieName/:id" element={<MovieDetailsPage />} />
        <Route path="/buytickets/:movieName" element={<BuyTicketsPage />} />
        <Route
          path="/buytickets/:movieName/:theatreName/:date/:time/seatbooking"
          element={<SeatBookingPage />}
        />
        <Route
          path="/buytickets/:movieName/:theatreName/:date/:time/payment"
          element={<PaymentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
