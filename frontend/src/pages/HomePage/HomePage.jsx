import React, { useEffect, useState } from "react";
import { AddCarousel } from "../../layout/Carousel/AddCarousel";
import Banner from "../../layout/Banner/Banner";
import SectionHeading from "../../components/SectionHeading";
import Card from "../../layout/Card/Card";
import "./HomePage.css";
import CategoryCard from "../../layout/CategoryCard/CategoryCard";
import SearchCard from "../../layout/SearchCard/SearchCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
const HomePage = () => {
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://16.171.225.190:8080/Movie/Get_All_Movies")
      .then((response) => {
        setAllMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <AddCarousel />
      <Banner
        imageAlt="ICC Men's Cricket World Cup 2023"
        imageLink="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
      />

      <SectionHeading text="Recommended Movies" />
      <div className="recommendedMovies">
        {allMovies && allMovies.length > 0
          ? allMovies
              .filter(
                (movie) =>
                  movie.category !== "Streaming Events" &&
                  movie.category !== "Outdoor Events" &&
                  movie.category !== "Popular Events"
              )
              .slice(0, 5)
              .map((movie, index) => <Card movieData={movie} key={index} />)
          : null}
      </div>
      <Banner
        imageAlt="ICC Men's Cricket World Cup 2023"
        imageLink="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
      />
      <SectionHeading text="The Best Of Live Events" />
      <div className="categorySection">
        <CategoryCard
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png"
          imageAlt="Workshops"
        />
        <CategoryCard
          imageLink="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png"
          imageAlt="Workshops"
        />
        <CategoryCard
          imageLink="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png"
          imageAlt="Workshops"
        />
        <CategoryCard
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/adventure-fun-collection-202211140440.png"
          imageAlt="Workshops"
        />
        <CategoryCard
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png"
          imageAlt="Workshops"
        />
      </div>
      <SectionHeading text="Online Streaming Events" />
      <div className="streamingEvents">
        {allMovies && allMovies.length > 0
          ? allMovies
              .filter((movie) => movie.category === "Streaming Events")
              .slice(0, 5)
              .map((movie, index) => <Card movieData={movie} key={index} />)
          : null}
      </div>
      <SectionHeading text="Outdoor Events" />
      <div className="recommendedMovies">
        {allMovies && allMovies.length > 0
          ? allMovies
              .filter((movie) => movie.category === "Outdoor Events")
              .slice(0, 5)
              .map((movie, index) => <Card movieData={movie} key={index} />)
          : null}
      </div>
      <SectionHeading text="Popular Events" />
      <div className="popularEvents">
        {allMovies && allMovies.length > 0
          ? allMovies
              .filter((movie) => movie.category === "Popular Events")
              .slice(0, 5)
              .map((movie, index) => <Card movieData={movie} key={index} />)
          : null}
      </div>
      <SectionHeading text="Trending Searches Right Now" />
      <div className="trendingSearch">
        <SearchCard
          searchTitle="INDIA vs PAKISTAN  - ICC MEN`S CWC 2023"
          searchCategory="Sports"
        />
        <SearchCard searchTitle="Pathan" searchCategory="Movies" />
        <SearchCard searchTitle="Jailer" searchCategory="Movies" />
        <SearchCard
          searchTitle="INDIA vs PAKISTAN  - Hockey World Cup 2023"
          searchCategory="Sports"
        />
        <SearchCard searchTitle="Gadar 2" searchCategory="Movies" />
        <SearchCard searchTitle="Welcome 3" searchCategory="Movies" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
