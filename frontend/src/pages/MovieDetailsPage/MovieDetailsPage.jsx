import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header/Header";
import "./MovieDetailsPage.css";
import SectionHeading from "../../components/SectionHeading";
import CastCard from "../../layout/CastCard/CastCard";
import Card from "../../layout/Card/Card";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
const MovieDetailsPage = () => {
  const {movieName}=useParams();
  const divStyle = {
    background: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url('https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1692248611.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    color: "white",
  };
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showVirtualHeader, setShowVirtualHeader] = useState(false);
  const aboutMovieRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (aboutMovieRef.current) {
      const aboutMovieRect = aboutMovieRef.current.getBoundingClientRect();
      const aboutMovieTop = aboutMovieRect.top;

      setShowVirtualHeader(aboutMovieTop <= 0);
    }
  };

  return (
    <>
      <Header />
      {showVirtualHeader && (
        <div className="virtual-header">
          <h1>{movieName}</h1>
          <div onClick={() => navigate(`/buytickets/${movieName}`)}>Book tickets</div>
        </div>
      )}
      <div style={divStyle}>
        <div className="left-section" style={{ flex: 1 }}>
          <div className="left-image">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1692248611.jpg"
              alt="Movie Poster"
            />
          </div>
          <div className="left-content">
            <h1>{movieName}</h1>
            <span className="movieInterestCount">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  className="w-6 h-6"
                >
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>
              </span>
              <h3>547.6K</h3> are interested
            </span>
            <div className="relaseSection">
              <div className="relaseSection-left">
                <div>Releasing on 7 Sep, 2023</div>
                <span>Are you interested in watching this movie?</span>
              </div>
              <div className="relaseSection-right"> I'm interested</div>
            </div>
            <div className="movieContentType">
              <div>2D,IMAX</div>
              <div>Hindi</div>
            </div>
            <div className="movieGeneralInformation">
              <span>2h 49m</span>
              <span> • </span>
              <span>Action, Thriller</span>
              <span> • </span>
              <span>UA</span>
            </div>
            <div
              className="bookButton"
              onClick={() => navigate(`/buytickets/${movieName}`)}
            >
              Book tickets
            </div>
          </div>
        </div>

        <div className="right-section" style={{ flex: 1 }}></div>
      </div>
      <div className="contentInformation" style={{ display: "flex" }}>
        <div className="contentInformation-left" style={{ flex: "85%" }}>
          <div className="aboutMovie">
            <SectionHeading text="About the movie" />
            <p>
              A high-octane action thriller that outlines the emotional journey
              of a man who is set to rectify the wrongs in society.
            </p>
          </div>
          <div className="underlineAssest"></div>
          <div className="castInfo" ref={aboutMovieRef}>
            <SectionHeading text="Cast" />
            <div className="castInfo-content">
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg"
                imageAlt="Sarukh Khan"
                actorName="Shah Rukh Khan"
                actorRole="Actor"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg"
                imageAlt="Sarukh Khan"
                actorName="Shah Rukh Khan"
                actorRole="Actor"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg"
                imageAlt="Sarukh Khan"
                actorName="Shah Rukh Khan"
                actorRole="Actor"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg"
                imageAlt="Sarukh Khan"
                actorName="Shah Rukh Khan"
                actorRole="Actor"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg"
                imageAlt="Sarukh Khan"
                actorName="Shah Rukh Khan"
                actorRole="Actor"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg"
                imageAlt="Sarukh Khan"
                actorName="Shah Rukh Khan"
                actorRole="Actor"
              />
            </div>
          </div>
          <div className="underlineAssest"></div>
          <div className="castInfo">
            <SectionHeading text="Crew" />
            <div className="castInfo-content">
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gauri-khan-iein021799-24-03-2017-18-02-23.jpg"
                imageAlt="Gauri Khan"
                actorName="Gauri Khan"
                actorRole="Producer"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gauri-khan-iein021799-24-03-2017-18-02-23.jpg"
                imageAlt="Gauri Khan"
                actorName="Gauri Khan"
                actorRole="Producer"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gauri-khan-iein021799-24-03-2017-18-02-23.jpg"
                imageAlt="Gauri Khan"
                actorName="Gauri Khan"
                actorRole="Producer"
              />
              <CastCard
                imageLink="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gauri-khan-iein021799-24-03-2017-18-02-23.jpg"
                imageAlt="Gauri Khan"
                actorName="Gauri Khan"
                actorRole="Producer"
              />
            </div>
          </div>
          <div className="underlineAssest"></div>
          <div className="movieSuggestion">
            <SectionHeading text="You might also like" />
            <div className="movieSuggestionCard">
              <Card
                imageLink="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/jailer-et00331686-1664432415.jpg"
                imageAlt="Jailer"
                movieName="Jailer"
              />
              <Card
                imageLink="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/jailer-et00331686-1664432415.jpg"
                imageAlt="Jailer"
                movieName="Jailer"
              />
              <Card
                imageLink="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/jailer-et00331686-1664432415.jpg"
                imageAlt="Jailer"
                movieName="Jailer"
              />
              <Card
                imageLink="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/jailer-et00331686-1664432415.jpg"
                imageAlt="Jailer"
                movieName="Jailer"
              />
              <Card
                imageLink="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/jailer-et00331686-1664432415.jpg"
                imageAlt="Jailer"
                movieName="Jailer"
              />
            </div>
          </div>
        </div>

        <div className="contentInformation-right" style={{ flex: "15%" }}></div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetailsPage;
