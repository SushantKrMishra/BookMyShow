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

  console.log(allMovies);
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
        {allMovies &&
          allMovies.map((movie, index) => (
            <Card
              imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAzMy41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-bucsngjtyp-portrait.jpg"
              imageAlt="Dream Girl 2"
              movieName={movie.name}
              category="Comedy/Drama/Romance"
              releasedate={movie.releasedate}
              key={index}
            />
          ))}
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
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg"
          imageAlt="WeMET Speed Dating "
          movieName="WeMET Speed Dating "
          category="watch on Zoom"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg"
          imageAlt="WeMET Speed Dating "
          movieName="WeMET Speed Dating "
          category="watch on Zoom"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg"
          imageAlt="WeMET Speed Dating "
          movieName="WeMET Speed Dating "
          category="watch on Zoom"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg"
          imageAlt="WeMET Speed Dating "
          movieName="WeMET Speed Dating "
          category="watch on Zoom"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg"
          imageAlt="WeMET Speed Dating "
          movieName="WeMET Speed Dating "
          category="watch on Zoom"
        />
      </div>
      <SectionHeading text="Outdoor Events" />
      <div className="recommendedMovies">
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360944-yrqvntdcpk-portrait.jpg"
          imageAlt="Mahabali"
          movieName="Mahabali"
          category="Shri Ram Centre: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360944-yrqvntdcpk-portrait.jpg"
          imageAlt="Mahabali"
          movieName="Mahabali"
          category="Shri Ram Centre: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360944-yrqvntdcpk-portrait.jpg"
          imageAlt="Mahabali"
          movieName="Mahabali"
          category="Shri Ram Centre: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360944-yrqvntdcpk-portrait.jpg"
          imageAlt="Mahabali"
          movieName="Mahabali"
          category="Shri Ram Centre: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360944-yrqvntdcpk-portrait.jpg"
          imageAlt="Mahabali"
          movieName="Mahabali"
          category="Shri Ram Centre: Delhi"
        />
      </div>
      <SectionHeading text="Popular Events" />
      <div className="popularEvents">
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367968-vhcvtcbxdj-portrait.jpg"
          imageAlt="Kisi Ko Batana Mat By Anubhav Singh Bassi - Delhi"
          movieName="Kisi Ko Batana Mat By Anubhav Singh - Delhi"
          category="Talkatora Stadium: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367968-vhcvtcbxdj-portrait.jpg"
          imageAlt="Kisi Ko Batana Mat By Anubhav Singh Bassi - Delhi"
          movieName="Kisi Ko Batana Mat By Anubhav Singh - Delhi"
          category="Talkatora Stadium: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367968-vhcvtcbxdj-portrait.jpg"
          imageAlt="Kisi Ko Batana Mat By Anubhav Singh Bassi - Delhi"
          movieName="Kisi Ko Batana Mat By Anubhav Singh - Delhi"
          category="Talkatora Stadium: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367968-vhcvtcbxdj-portrait.jpg"
          imageAlt="Kisi Ko Batana Mat By Anubhav Singh Bassi - Delhi"
          movieName="Kisi Ko Batana Mat By Anubhav Singh - Delhi"
          category="Talkatora Stadium: Delhi"
        />
        <Card
          imageLink="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367968-vhcvtcbxdj-portrait.jpg"
          imageAlt="Kisi Ko Batana Mat By Anubhav Singh Bassi - Delhi"
          movieName="Kisi Ko Batana Mat By Anubhav Singh - Delhi"
          category="Talkatora Stadium: Delhi"
        />
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
