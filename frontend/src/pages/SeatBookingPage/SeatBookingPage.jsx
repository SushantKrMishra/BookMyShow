import React, { useState, useEffect } from "react";
import "./SeatBookingPage.css";
import { useNavigate, useParams } from "react-router-dom";

const SeatBookingPage = () => {
  const { movieName, theatreName, date, time } = useParams();
  const [seats, setSeats] = useState([
    {
      id: 1,
      seatNo: 1,
      isBooked: false,
    },
    {
      id: 2,
      seatNo: 2,
      isBooked: true,
    },
    {
      id: 3,
      seatNo: 3,
      isBooked: false,
    },
    {
      id: 4,
      seatNo: 4,
      isBooked: true,
    },
    {
      id: 5,
      seatNo: 5,
      isBooked: false,
    },
    {
      id: 6,
      seatNo: 6,
      isBooked: true,
    },
    {
      id: 7,
      seatNo: 7,
      isBooked: true,
    },
    {
      id: 8,
      seatNo: 8,
      isBooked: false,
    },
    {
      id: 9,
      seatNo: 9,
      isBooked: true,
    },
    {
      id: 10,
      seatNo: 10,
      isBooked: false,
    },
    {
      id: 11,
      seatNo: 11,
      isBooked: true,
    },

    {
      id: 12,
      seatNo: 12,
      isBooked: false,
    },
    {
      id: 13,
      seatNo: 13,
      isBooked: true,
    },
    {
      id: 14,
      seatNo: 14,
      isBooked: false,
    },
    {
      id: 1,
      seatNo: 1,
      isBooked: false,
    },
    {
      id: 2,
      seatNo: 2,
      isBooked: true,
    },
    {
      id: 3,
      seatNo: 3,
      isBooked: false,
    },
    {
      id: 4,
      seatNo: 4,
      isBooked: true,
    },
    {
      id: 5,
      seatNo: 5,
      isBooked: false,
    },
    {
      id: 6,
      seatNo: 6,
      isBooked: true,
    },
    {
      id: 7,
      seatNo: 7,
      isBooked: true,
    },
    {
      id: 8,
      seatNo: 8,
      isBooked: false,
    },
    {
      id: 9,
      seatNo: 9,
      isBooked: true,
    },
    {
      id: 10,
      seatNo: 10,
      isBooked: false,
    },
    {
      id: 11,
      seatNo: 11,
      isBooked: true,
    },

    {
      id: 12,
      seatNo: 12,
      isBooked: false,
    },
    {
      id: 13,
      seatNo: 13,
      isBooked: true,
    },
    {
      id: 14,
      seatNo: 14,
      isBooked: false,
    },
    {
      id: 1,
      seatNo: 1,
      isBooked: false,
    },
    {
      id: 2,
      seatNo: 2,
      isBooked: true,
    },
    {
      id: 3,
      seatNo: 3,
      isBooked: false,
    },
    {
      id: 4,
      seatNo: 4,
      isBooked: true,
    },
    {
      id: 5,
      seatNo: 5,
      isBooked: false,
    },
    {
      id: 6,
      seatNo: 6,
      isBooked: true,
    },
    {
      id: 7,
      seatNo: 7,
      isBooked: true,
    },
    {
      id: 8,
      seatNo: 8,
      isBooked: false,
    },
    {
      id: 9,
      seatNo: 9,
      isBooked: true,
    },
    {
      id: 10,
      seatNo: 10,
      isBooked: false,
    },
    {
      id: 11,
      seatNo: 11,
      isBooked: true,
    },

    {
      id: 12,
      seatNo: 12,
      isBooked: false,
    },
    {
      id: 13,
      seatNo: 13,
      isBooked: true,
    },
    {
      id: 14,
      seatNo: 14,
      isBooked: false,
    },
    {
      id: 1,
      seatNo: 1,
      isBooked: false,
    },
    {
      id: 2,
      seatNo: 2,
      isBooked: true,
    },
    {
      id: 3,
      seatNo: 3,
      isBooked: false,
    },
    {
      id: 4,
      seatNo: 4,
      isBooked: true,
    },
    {
      id: 5,
      seatNo: 5,
      isBooked: false,
    },
    {
      id: 6,
      seatNo: 6,
      isBooked: true,
    },
    {
      id: 7,
      seatNo: 7,
      isBooked: true,
    },
    {
      id: 8,
      seatNo: 8,
      isBooked: false,
    },
    {
      id: 9,
      seatNo: 9,
      isBooked: true,
    },
    {
      id: 10,
      seatNo: 10,
      isBooked: false,
    },
    {
      id: 11,
      seatNo: 11,
      isBooked: true,
    },

    {
      id: 12,
      seatNo: 12,
      isBooked: false,
    },
    {
      id: 13,
      seatNo: 13,
      isBooked: true,
    },
    {
      id: 14,
      seatNo: 14,
      isBooked: false,
    },
    {
      id: 1,
      seatNo: 1,
      isBooked: false,
    },
    {
      id: 2,
      seatNo: 2,
      isBooked: true,
    },
    {
      id: 3,
      seatNo: 3,
      isBooked: false,
    },
    {
      id: 4,
      seatNo: 4,
      isBooked: true,
    },
    {
      id: 5,
      seatNo: 5,
      isBooked: false,
    },
    {
      id: 6,
      seatNo: 6,
      isBooked: true,
    },
    {
      id: 7,
      seatNo: 7,
      isBooked: true,
    },
    {
      id: 8,
      seatNo: 8,
      isBooked: false,
    },
    {
      id: 9,
      seatNo: 9,
      isBooked: true,
    },
    {
      id: 10,
      seatNo: 10,
      isBooked: false,
    },
    {
      id: 11,
      seatNo: 11,
      isBooked: true,
    },

    {
      id: 12,
      seatNo: 12,
      isBooked: false,
    },
    {
      id: 13,
      seatNo: 13,
      isBooked: true,
    },
    {
      id: 14,
      seatNo: 14,
      isBooked: false,
    },
  ]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const toggleSeat = (seatId) => {
    const isSeatBooked = seats.find((seat) => seat.id === seatId)?.isBooked;
    if (isSeatBooked) {
      alert("This seat is already booked.");
      return;
    }
    const isSeatSelected = selectedSeats.includes(seatId);

    if (isSeatSelected) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  const handleIconClick = () => {
    navigate(`/buytickets/${movieName}`);
  };
  const handleBookSeat = () => {
    navigate(
      `/buytickets/${movieName}/${theatreName}/${date}/${time}/payment`,
      {
        state: { selectedSeats },
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
        <div className="seat-grid">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${
                seat.isBooked
                  ? "booked"
                  : selectedSeats.includes(seat.id)
                  ? "selected"
                  : "available"
              }`}
              onClick={() => toggleSeat(seat.id)}
            >
              {seat.seatNo}
            </div>
          ))}
        </div>
        <img
          src="https://assetscdn1.paytm.com/movies_new/_next/static/media/screen-icon.8dd7f126.svg"
          alt=""
          className="screenPosition"
        />
      </div>
      {selectedSeats.length > 0 && (
        <div className="bookSeatButton" onClick={handleBookSeat}>
          <span>Pay Rs. {400.0 * selectedSeats.length}</span>
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
