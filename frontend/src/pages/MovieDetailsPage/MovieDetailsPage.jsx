import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header/Header";
import "./MovieDetailsPage.css";
import SectionHeading from "../../components/SectionHeading";
import CastCard from "../../layout/CastCard/CastCard";
import Card from "../../layout/Card/Card";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
const MovieDetailsPage = () => {
  const { movieData } = useLocation().state || {};
  const [isInterested, setIsInterested] = useState(false);
  const divStyle = {
    background: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${movieData?.bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "65%",
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
  const recommendedMovies = [
    {
      aboutTheMovie:
        "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
      bannerImage:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jailer-et00331686-1664432415.jpg",
      cast: "Rajinikanth,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg|MohanLal,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mohanlal-1502-24-03-2017-12-30-59.jpg|Ramya Krishnan,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramya-krishnan-2920-18-09-2017-05-34-55.jpg",
      category: " Action , Drama , Thriller",
      crew: "Nelson DilipKumar,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nelson-dilipkumar-1090825-14-08-2018-11-45-27.jpg|Kalnithi Maran,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kalanidhi-maran-2016384-1649249086.jpg",
      duration: 2.0,
      howManyInterested: "397",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jailer-et00331686-1664432415.jpg",
      name: "Jailer",
      releasedate: "2023-09-12T09:39:54.258Z",
    },
    {
      aboutTheMovie:
        "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
      bannerImage:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jailer-et00331686-1664432415.jpg",
      cast: "Rajinikanth,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg|MohanLal,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mohanlal-1502-24-03-2017-12-30-59.jpg|Ramya Krishnan,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramya-krishnan-2920-18-09-2017-05-34-55.jpg",
      category: " Action , Drama , Thriller",
      crew: "Nelson DilipKumar,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nelson-dilipkumar-1090825-14-08-2018-11-45-27.jpg|Kalnithi Maran,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kalanidhi-maran-2016384-1649249086.jpg",
      duration: 2.0,
      howManyInterested: "397",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jailer-et00331686-1664432415.jpg",
      name: "Jailer",
      releasedate: "2023-09-12T09:39:54.258Z",
    },
    {
      aboutTheMovie:
        "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
      bannerImage:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jailer-et00331686-1664432415.jpg",
      cast: "Rajinikanth,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg|MohanLal,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mohanlal-1502-24-03-2017-12-30-59.jpg|Ramya Krishnan,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramya-krishnan-2920-18-09-2017-05-34-55.jpg",
      category: " Action , Drama , Thriller",
      crew: "Nelson DilipKumar,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nelson-dilipkumar-1090825-14-08-2018-11-45-27.jpg|Kalnithi Maran,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kalanidhi-maran-2016384-1649249086.jpg",
      duration: 2.0,
      howManyInterested: "397",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jailer-et00331686-1664432415.jpg",
      name: "Jailer",
      releasedate: "2023-09-12T09:39:54.258Z",
    },
    {
      aboutTheMovie:
        "Finding himself surprisingly at home in Southern Italy, Robert McCall (Denzel Washington) discovers his new friends are under the control of local crime bosses. As events turn deadly, McCall must become his friends protector by taking on the mafia.",
      bannerImage:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-equalizer-3-et00358212-1682576743.jpg",
      cast: "Rajinikanth,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg|MohanLal,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mohanlal-1502-24-03-2017-12-30-59.jpg|Ramya Krishnan,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramya-krishnan-2920-18-09-2017-05-34-55.jpg",
      category: " Action , Drama , Thriller",
      crew: "Nelson DilipKumar,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nelson-dilipkumar-1090825-14-08-2018-11-45-27.jpg|Kalnithi Maran,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kalanidhi-maran-2016384-1649249086.jpg",
      duration: 2.0,
      howManyInterested: "397",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/the-equalizer-3-et00358212-1682576743.jpg",
      name: "The Equalizer 3",
      releasedate: "2023-09-12T09:39:54.258Z",
    },
    {
      aboutTheMovie:
        "Set in eerie, post-World War II Venice on All Hallows` Eve, A Haunting in Venice is a terrifying mystery featuring the return of the celebrated sleuth, Hercule Poirot. Now retired and living in self-imposed exile in the world`s most glamorous city, Poirot reluctantly attends a seance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
      bannerImage:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/a-haunting-in-venice-et00363853-1688646632.jpg",
      cast: "Kenneth Branagh,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kenneth-branagh-10442-24-03-2017-12-33-43.jpg|Camille Cottin,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/camille-cottin-2013313-24-05-2021-05-56-18.jpg|Kelly Reilly,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kelly-reilly-15492-1688642917.jpg",
      category: "Crime,Horror,Mystery",
      crew: "Kenneth Branagh,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kenneth-branagh-10442-24-03-2017-12-33-43.jpg|Camille Cottin,https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/camille-cottin-2013313-24-05-2021-05-56-18.jpg",
      duration: 2.5,
      howManyInterested: "397",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTQuM0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363853-nvqxzanakm-portrait.jpg",
      name: "A Haunting in Venice",
      releasedate: "2023-09-12T09:39:54.258Z",
    },
  ];
  const handleScroll = () => {
    if (aboutMovieRef.current) {
      const aboutMovieRect = aboutMovieRef.current.getBoundingClientRect();
      const aboutMovieTop = aboutMovieRect.top;

      setShowVirtualHeader(aboutMovieTop <= 0);
    }
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatDuration = (duration) => {
    const hours = Math.floor(duration);
    const minutes = duration - hours;
    return `${hours}h ${minutes.toFixed(2) * 100}m`;
  };
  const toggleInterestedClass = () => {
    setIsInterested(!isInterested);
  };
  return (
    <>
      <Header />
      {showVirtualHeader && (
        <div className="virtual-header">
          <h1>{movieData.name}</h1>
          <div onClick={() => navigate(`/buytickets/${movieData.name}`)}>
            Book tickets
          </div>
        </div>
      )}
      <div style={divStyle}>
        <div className="left-section" style={{ flex: 1 }}>
          <div className="left-image">
            <img
              src={movieData?.image}
              alt={movieData?.name}
              title={movieData?.name}
            />
          </div>
          <div className="left-content">
            <h1>{movieData.name}</h1>
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
              <h3>{movieData?.howManyInterested}</h3> are interested
            </span>
            <div className="relaseSection">
              <div className="relaseSection-left">
                <div>On Air : {formatDate(movieData?.releasedate)}</div>
                <span>Are you interested in watching this movie?</span>
              </div>
              <div
                className={`relaseSection-right ${
                  isInterested ? "releaseSection-right-clicked" : ""
                }`}
                onClick={toggleInterestedClass}
              >
                I'm interested
              </div>
            </div>
            <div className="movieContentType">
              <div>2D,IMAX</div>
              <div>Hindi</div>
            </div>
            <div className="movieGeneralInformation">
              <span>{formatDuration(movieData.duration)}</span>
              <span> • </span>
              <span>{movieData.category}</span>
              <span> • </span>
              <span>UA</span>
            </div>
            <div
              className="bookButton"
              onClick={() => navigate(`/buytickets/${movieData.name}`)}
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
            <p>{movieData.aboutTheMovie}</p>
          </div>
          <div className="underlineAssest"></div>
          <div className="castInfo" ref={aboutMovieRef}>
            <SectionHeading text="Cast" />
            <div className="castInfo-content">
              {movieData && movieData.cast && movieData.cast.length > 0
                ? movieData.cast.split("|").map((castItem, index) => {
                    const [name, imageUrl] = castItem.split(",");
                    if (imageUrl) {
                      return (
                        <CastCard
                          key={index}
                          imageLink={imageUrl}
                          imageAlt={name}
                          actorName={name}
                          actorRole="Actor"
                        />
                      );
                    } else {
                      return null;
                    }
                  })
                : "Details not Available"}
            </div>
          </div>
          <div className="underlineAssest"></div>
          <div className="castInfo">
            <SectionHeading text="Crew" />
            <div className="castInfo-content">
              {movieData && movieData.crew && movieData.crew.length > 0
                ? movieData.crew.split("|").map((castItem, index) => {
                    const [name, imageUrl] = castItem.split(",");
                    if (imageUrl) {
                      return (
                        <CastCard
                          key={index}
                          imageLink={imageUrl}
                          imageAlt={name}
                          actorName={name}
                          actorRole={index === 0 ? "Director" : "Producer"}
                        />
                      );
                    } else {
                      return null;
                    }
                  })
                : "Details not Available"}
            </div>
          </div>
          <div className="underlineAssest"></div>
          <div className="movieSuggestion">
            <SectionHeading text="You might also like" />
            <div className="movieSuggestionCard">
              {recommendedMovies &&
                recommendedMovies.map((movie, index) => (
                  <Card movieData={movie} key={index} />
                ))}
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
