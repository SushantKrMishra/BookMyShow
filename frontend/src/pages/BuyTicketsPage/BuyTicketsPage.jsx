import React, { useState, useEffect } from "react";
import "./BuyTicketsPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Select from "react-select";
import TheatreCard from "../../components/TheatreCard/TheatreCard";
import { useParams, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
const BuyTicketsPage = () => {
  const MIN_LOADING_DURATION = 2300;
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDropDownOption, setSelectedDropDownOption] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [theaters, setTheaters] = useState([]);
  const { payload } = useLocation().state || {};
  const dropdownOptions = [
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
  ];
  const { movieName } = useParams();
  const selectedDate = selectedOption
    ? selectedOption.value
    : new Date().toISOString();
  function groupTheatersAndShows(data) {
    const theatersByName = {};

    data.forEach((show) => {
      const theaterName = show.theater.name;
      const showId = show.id;

      if (!theatersByName[theaterName]) {
        theatersByName[theaterName] = {
          name: theaterName,
          showTime: [],
          price: [],
          showDate: [],
          movie: {},
          theater: {},
          showIds: [],
        };
      }

      theatersByName[theaterName].showTime.push(...show.showTime);
      theatersByName[theaterName].price.push(show.price);
      theatersByName[theaterName].showDate = show.showDate;
      theatersByName[theaterName].movie = show.movie;
      theatersByName[theaterName].theater = show.theater;
      theatersByName[theaterName].showIds.push(showId);
    });

    return Object.values(theatersByName);
  }

  const fetchTheatresbyCity = () => {
    axios
      .get(
        `http://16.171.225.190:8080/show/Get_By_City?city=${payload?.city}&movieName=${movieName}`,
        { payload }
      )
      .then((response) => {
        const groupedTheaters = groupTheatersAndShows(response.data);
        setTheaters(groupedTheaters);
      })
      .catch((error) => {
        console.error("Error fetching theaters:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
  };
  const fetchTheatresByDate = () => {
    axios
      .get(
        `http://16.171.225.190:8080/show/Get_By_Date?city=${payload?.city}&movieName=${movieName}&ShowDate=${date_show}`,
        {
          city: payload?.city,
          movieName: payload?.movieName,
          ShowDate: date_show,
        }
      )
      .then((response) => {
        const groupedTheaters = groupTheatersAndShows(response.data);
        setTheaters(groupedTheaters);
      })
      .catch((error) => {
        console.error("Error fetching theaters:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, MIN_LOADING_DURATION);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchTheatresbyCity();
  }, [payload]);

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
  useEffect(() => {
    setIsLoading(true);
    fetchTheatresByDate();
  }, [selectedOption]);

  const dateParts = selectedDate.split("T");
  const date_show = dateParts[0];
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
        {isLoading ? (
          <Loader />
        ) : theaters?.length > 0 ? (
          theaters?.map((item, index) => (
            <React.Fragment key={index}>
              <TheatreCard theater={item} />
              {index < theaters.length - 1 && (
                <div className="underlineAssest"></div>
              )}
            </React.Fragment>
          ))
        ) : (
          <p>No Shows Available</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BuyTicketsPage;
