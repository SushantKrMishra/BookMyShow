import React, { useState, useEffect } from "react";
import "./SeatBookingPage.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
const SeatBookingPage = () => {
  const { movieName, theatreName, date } = useParams();
  const location = useLocation();
  const { id, price, time } = location.state;
  const [isLoading, setIsLoading] = useState(true);
  const [seatData, setSeatData] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://16.171.225.190:8080/show/seats?showId=${id}`, {
        showId: id,
      })
      .then((response) => {
        setSeatData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching theaters:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  const toggleSeat = (seatNo) => {
    const isSeatBooked = seatData[seatNo];

    if (isSeatBooked) {
      alert("This seat is already booked.");
      return;
    }

    if (selectedSeats.includes(seatNo)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== seatNo)
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatNo]);
    }
  };

  const handleIconClick = () => {
    navigate(`/buytickets/${movieName}`);
  };
  const handleBookSeat = () => {
    navigate(
      `/buytickets/${movieName}/${theatreName}/${date}/${time}/payment`,
      {
        state: { selectedSeats, price, id },
      }
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="header-seatBooking">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 backArrowIcon"
            onClick={handleIconClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <div className="infoSection">
            <span>{movieName}</span>
            <span>{theatreName}</span>
          </div>
        </div>

        <div className="closeButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 closeButtonIcon"
            onClick={handleIconClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="bookingTimeDetails">
        <div>Date : {new Date(date).toLocaleDateString()}</div>
        <div>Selected Time Slot : {time}</div>
      </div>
      <div className="seat-booking-container">
        <h2>Seat Booking</h2>
        {isLoading ? ( 
          <Loader />
        ) : (
          <div className="seat-grid">
            {Object.entries(seatData).map(([seatNo, isBooked]) => (
              <div
                key={seatNo}
                className={`seat ${
                  isBooked
                    ? "booked"
                    : selectedSeats.includes(seatNo)
                    ? "selected"
                    : "available"
                }`}
                onClick={() => toggleSeat(seatNo)}
              >
                {seatNo}
              </div>
            ))}
          </div>
        )}

        <img
          src="https://assetscdn1.paytm.com/movies_new/_next/static/media/screen-icon.8dd7f126.svg"
          alt=""
          className="screenPosition"
        />
      </div>
      {selectedSeats.length > 0 && (
        <div className="bookSeatButton" onClick={handleBookSeat}>
          <span>Pay Rs. {price * selectedSeats.length}</span>
        </div>
      )}
      {selectedSeats.length === 0 && (
        <div className="secondaryFooter">
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={0.4}
                stroke="#1ea83c"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                />
              </svg>
            </span>
            Available
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1ea83c"
                viewBox="0 0 24 24"
                strokeWidth={0.4}
                stroke=""
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                />
              </svg>
            </span>
            Selected
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(190, 188, 188)"
                viewBox="0 0 24 24"
                strokeWidth={0.4}
                stroke="rgb(190, 188, 188)"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                />
              </svg>
            </span>
            Sold
          </div>
        </div>
      )}
    </>
  );
};

export default SeatBookingPage;
