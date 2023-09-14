import {
  HomePage,
  MovieDetailsPage,
  BuyTicketsPage,
  SeatBookingPage,
  PaymentPage,
  SignUpPage,
  AddMovie,
  AddTheatre,
  CustomerSupport,
} from "./Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer-support" element={<CustomerSupport />} />

        <Route path="/signup" element={<SignUpPage />} />

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
        <Route
          path="/addMovie_admin"
          element={
            user && user.role === "ROLE_ADMIN" ? <AddMovie /> : <HomePage />
          }
        />
        <Route
          path="/addTheatre_admin"
          element={
            user && user.role === "ROLE_ADMIN" ? <AddTheatre /> : <HomePage />
          }
        />
        <Route path="/addT_admin1" element={<AddTheatre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
