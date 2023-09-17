import React, { useEffect, useState } from "react";
import "./MyBookingPage.css";
import axios from "axios";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
const MyBookingPage = () => {
  const token = useSelector((state) => state.auth.user.token);
  const user = useSelector((state) => state?.auth?.user?.user);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://16.171.225.190:8080/tickets/view_ticket?id=${user.id}`, {
        headers,
      })
      .then((response) => {
        setBookingData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user.id]);

  return (
    <>
      <Header />
      <div className="my-booking-container">
        <h1>My Bookings</h1>
        {isLoading ? (
          <Loader />
        ) : (
          bookingData &&
          bookingData?.map((booking, index) => (
            <div key={index} className="booking-card">
              <h2>{booking?.movieName}</h2>
              <p>Show ID: {booking?.showId}</p>
              <p>Amount: ₹ {booking?.amount}</p>
              <p>Allotted Seats: {booking?.allottedSeats.join(", ")}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MyBookingPage;
