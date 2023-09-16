import React, { useState } from "react";
import "./TheatreCard.css";
import TheatreInfoDialog from "./TheatreInfo.jsx";
import { useNavigate } from "react-router-dom";
const TheatreCard = ({ theater }) => {
  const theatreAmenities = ["Parking", "Concessions", "Restrooms"];
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const handleClick = (time, id, price) => {
    navigate(
      `/buytickets/${theater?.movie?.name}/${theater?.theater?.name}/${theater.showDate[0]}-${theater.showDate[1]}-${theater.showDate[2]}/${time}/seatbooking`,
      { state: { id, price, time } }
    );
  };
  
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="theatreCard">
      <div>{theater?.theater?.name}</div>
      <div onClick={openDialog}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 infoIcon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </span>
        <span>info</span>
      </div>
      <div>
        {theater &&
          theater?.showTime?.map((item, index) => {
            if (index % 2 === 0) {
              const time = `${theater.showTime[index]}:${
                theater.showTime[index + 1]
              }`;
              return (
                <span
                  onClick={() => {
                    handleClick(
                      time,
                      theater.showIds[index / 2],
                      theater.price[index / 2]
                    );
                  }}
                >
                  {time}
                </span>
              );
            } else {
              return null;
            }
          })}
      </div>
      <TheatreInfoDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        theatreName={theater?.theater?.name}
        address={theater?.theater?.address}
        amenities={theatreAmenities}
      />
    </div>
  );
};

export default TheatreCard;
