import React, { useState, useEffect } from "react";
import "./BuyTicketsPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Select from "react-select";
import TheatreCard from "../../components/TheatreCard/TheatreCard";
import { useParams } from "react-router-dom";

const BuyTicketsPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDropDownOption, setSelectedDropDownOption] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);
  const dropdownOptions = [
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
  ];
  const { movieName } = useParams();
  useEffect(() => {
    const today = new Date();
    const dateOptions = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dateOptions.push({
        value: date.toISOString(),
        label: date.toDateString(),
      });
    }
    setDateOptions(dateOptions);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const selectedDate = selectedOption
    ? selectedOption.value
    : new Date().toISOString();

  return (
    <div className="buyTicketsPage">
      <Header />
      <div className="movieHeader">
        <span>{movieName}</span>
      </div>
      <div className="secondaryHeader">
        <div className="datePicker">
          <Select
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
            options={dateOptions}
            placeholder="Select a date"
            required
          />
        </div>
        <div className="dropdown">
          <Select
            value={selectedDropDownOption}
            onChange={(option) => setSelectedDropDownOption(option)}
            options={dropdownOptions}
            placeholder="Select an option"
            className="custom-select"
            required
          />
        </div>
      </div>

      <div className="bookingContent">
        <TheatreCard
          theatreName="PVR"
          theatreAddress="Delhi NCR"
          theatreAmenities={["Parking", "Concessions", "Restrooms"]}
          movieName={movieName}
          selectedDate={selectedDate}
        />
        <div className="underlineAssest"></div>
        <TheatreCard
          theatreName="PVR"
          theatreAddress="Delhi NCR"
          theatreAmenities={["Parking", "Concessions", "Restrooms"]}
          movieName={movieName}
          selectedDate={selectedDate}
        />
        <div className="underlineAssest"></div>
        <TheatreCard
          theatreName="PVR"
          theatreAddress="Delhi NCR"
          theatreAmenities={["Parking", "Concessions", "Restrooms"]}
          movieName={movieName}
          selectedDate={selectedDate}
        />
        <div className="underlineAssest"></div>
        <TheatreCard
          theatreName="PVR"
          theatreAddress="Delhi NCR"
          theatreAmenities={["Parking", "Concessions", "Restrooms"]}
          movieName={movieName}
          selectedDate={selectedDate}
        />
        <div className="underlineAssest"></div>
        <TheatreCard
          theatreName="PVR"
          theatreAddress="Delhi NCR"
          theatreAmenities={["Parking", "Concessions", "Restrooms"]}
          movieName={movieName}
          selectedDate={selectedDate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BuyTicketsPage;
