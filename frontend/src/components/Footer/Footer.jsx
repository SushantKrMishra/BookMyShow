import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <span>Home</span> */}
      <div className="privacy_policy">
        <div>Privacy Note</div>
        <div>
          By using www.bookmyshow.com(our website), you are fully accepting the
          Privacy Policy available at governing your access to Bookmyshow and
          provision of services by Bookmyshow to you. If you do not accept terms
          mentioned in the <a href="/privacy">Privacy Policy</a>, ou must not
          share any of your personal information and immediately exit
          Bookmyshow.
        </div>
      </div>
      <div className="part1">
        <div>
          <div style={{ fontSize: "20px", marginRight: "30px" }}>
            List your show
          </div>

          <div>
            Got a show, event, activity or a great experience? Partner with us
            &amp; get listed on BookMyShow
          </div>
        </div>
        <div
          className="contact_button"
          onClick={() => navigate("/customer-support")}
        >
          <button>Contact Today!</button>
        </div>
      </div>
      <div className="part2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 102 102"
            id="icon-callcenter"
            width="100%"
            height="100%"
          >
            <path d="M68.8 29.4c0-10.4-8.4-18.8-18.8-18.8S31.2 19 31.2 29.4 39.6 48.2 50 48.2s18.8-8.4 18.8-18.8zm-35.8 0c0-9.3 7.6-17 17-17 9.3 0 17 7.6 17 17 0 9.3-7.6 17-17 17-9.3 0-17-7.6-17-17z"></path>
            <path d="M24 30.3c.5 0 .9-.4.9-.9C24.9 15.6 36.2 4.3 50 4.3s25.1 11.3 25.1 25.1c0 13.1-10.5 28.3-24.2 29v-3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.6c0 .5.4.9.9.9s.9-.4.9-.9v-2.9c14.7-.7 26-16.8 26-30.8C76.9 14.6 64.8 2.5 50 2.5S23.1 14.6 23.1 29.4c0 .5.4.9.9.9z"></path>
            <path d="M68.1 63c-.6-.2-1.2-.3-1.9-.3-.9 0-2.3.7-4.9 2.1-3.2 1.7-7.7 4-10.6 4-3.2 0-8-2.3-11.5-4-2.8-1.3-4.3-2-5.3-2-.7 0-1.3.1-1.9.3C16.7 68.2 11.2 86 11.2 96.7c0 .5.4.9.9.9H88c.5 0 .9-.4.9-.9 0-10.8-5.6-28.6-20.8-33.7zM13 95.7c.3-12.1 7.2-26.8 19.6-30.9.4-.1.8-.2 1.3-.2.6 0 2.7 1 4.5 1.9 3.9 1.9 8.7 4.2 12.3 4.2 3.3 0 7.8-2.3 11.4-4.2 1.6-.8 3.6-1.9 4.1-1.9s.9.1 1.3.2C79.9 68.9 86.7 83.6 87 95.7H13zm3.6-55.3c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c0 .5.4.9.9.9zm66.8 0c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c-.1.5.4.9.9.9z"></path>
          </svg>
          <div>24 x 7 Customer care</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 102 102"
            id="icon-resend"
            width="100%"
            height="100%"
          >
            <path d="M92.1 69l-5.6-13.9a1 1 0 0 0-1.1-.5c-1.9.8-4.1-.2-4.8-2.1-.4-.9-.4-1.9 0-2.8.4-.9 1.1-1.6 2-2 .2-.1.4-.2.5-.4s.1-.4 0-.6l-5.6-13.9a1 1 0 0 0-1.1-.5L61 38.5l9-20.9c.2-.4 0-.9-.4-1.1L57 11.1c-.4-.2-.9 0-1.1.4a3.3 3.3 0 0 1-4.3 1.8c-.8-.3-1.4-1-1.8-1.8-.3-.8-.3-1.7 0-2.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.4-.5L36.8 2.6c-.4-.2-.9 0-1.1.4L12.3 58.2l-3.9 1.5c-.2.2-.4.3-.4.5-.1.2-.1.4 0 .6l5.6 13.9c.2.4.7.6 1.1.5 1.9-.7 4.1.2 4.8 2 .4.9.4 1.9 0 2.8s-1.1 1.6-2 2c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .6l5.4 14c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l68.1-27.3c.5-.2.7-.7.6-1.2zM36.9 4.4L48 9.1c-.2 1-.2 2 .2 3 .5 1.2 1.4 2.2 2.7 2.7 2.3 1 4.8.1 6.1-1.9l11.1 4.7-9.3 21.8-4.7 1.9L59 30.2l2.5-5.8c.1-.2.1-.4 0-.6s-.2-.4-.4-.5L38 13.5c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.4L19.1 55.5l-4.7 1.9 22.5-53zm-1.4 16.7l.8.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-.8-.3 1.8-4.3 21.6 9.2-1.8 4.3-.8-.4c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1l.8.3-5.1 12-30.7 12.4 14.2-33.5zM23.7 95.6l-5-12.4c1-.6 1.7-1.4 2.2-2.5.6-1.3.6-2.8 0-4.1-.8-2-2.8-3.4-5-3.4-.4 0-.8 0-1.2.1L9.8 61l66.5-26.7 5 12.4c-1 .6-1.7 1.4-2.2 2.5a4.9 4.9 0 0 0 0 4.1c.8 2 2.8 3.4 5 3.4.4 0 .8 0 1.2-.1l5 12.4-66.6 26.6z"></path>
            <path d="M70 42.1c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6 0L20.2 61.2a1 1 0 0 0-.5 1.1L30 87.8c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l42.3-17 6.4-2.6c.4-.2.6-.7.5-1.1L70 42.1zm3.5 27.3l-.3-.8a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.4.8-34.2 13.7-.3-.7a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.3.8-5.1 2-9.6-23.9 5.1-2 .3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 34.1-13.7.3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 4.9-2 9.6 23.9-4.9 2.1z"></path>
            <path d="M30.6 65.7c-.2-.4-.7-.6-1.1-.5s-.6.7-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm3.5 8.6a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm32.2-22.9a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm1.9 9.3l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1L69.7 60a1 1 0 0 0-1.1-.5c-.4.2-.6.7-.4 1.2zm-19.5-34l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.3.4-.1.9.4 1.1zm-7.8-3.3l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1zm13.4 41.4c-.5 0-.8.4-.8.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.9-4.2 4.2-4.3l-1.6 2.3c-.3.4-.2.9.2 1.2.1.1.3.1.5.1.3 0 .5-.1.7-.4l2.6-3.7c.3-.4.2-.9-.2-1.1L47.5 57c-.4-.3-.9-.2-1.2.2s-.2.9.2 1.2l1.9 1.4c-3 .3-5.4 2.9-5.4 5.9 0 3.3 2.7 6 6 6s6-2.7 6-6c.1-.5-.3-.9-.7-.9z"></path>
          </svg>
          <div>Resend booking confirmation</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-newsletter"
            viewBox="-1 -1 102 102"
            width="100%"
            height="100%"
          >
            <g id="elnewsletter">
              <path
                class="elst0"
                d="M97.5 90.3V33.6c0-.5-.4-1-1-1H82.9V9.8c0-.5-.4-1-1-1H18.1a1 1 0 0 0-1 1v22.8H3.5a1 1 0 0 0-1 1v56.9c0 .1.1.1.1.2v.1c0 .1.1.1.2.1.1.1.2.1.2.1.1 0 .1 0 .2.1h93.4c.1 0 .3 0 .4-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2v-.1c0-.1.1-.1.1-.2.1 0 .1 0 .1-.1zm-1.9-55.7v53.6L63.9 64.1l18.6-17.7 7.7-7.4c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-6.8v-2.7h12.9zM50.2 56.1l43.4 33.1H6.4l43.8-33.1zm32.7-16.8h4.4l-4.4 4.1v-4.1zM19.1 10.8h61.8v34.5L62.4 62.9l-11.6-8.8c-.3-.3-.8-.3-1.2 0L37.8 63 19.1 45.3V10.8zm-2 32.6l-4.4-4.1h4.4v4.1zm0-8.8v2.7h-6.8c-.4 0-.8.2-.9.6-.1.4-.1.8.2 1.1l26.5 25.2-31.8 24V34.6h12.8z"
              ></path>
              <path
                class="elst0"
                d="M28.9 22.5h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1zm0 10h42.7a1 1 0 0 0 0-2H28.9a1 1 0 0 0 0 2zm0 9.9h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1z"
              ></path>
            </g>
          </svg>
          <div>Subscribe to newsletter</div>
        </div>
      </div>
      <div className="part3">
        <div>
          <div>Movies playing in Chandigarh</div>
          <div className="movies">
            <Link to="/movies/roohi/ET00099813" className="link">
              Roohi
            </Link>
            <div className="line"></div>
            <Link to="/movies/roberrt-telugu/ET00307859" className="link">
              Roberrt
            </Link>
            <div className="line"></div>
            <Link to="/movies/srikaaram-sreekaram/ET00106100" className="link">
              Srikaaram (Sreekaram)
            </Link>
            <div className="line"></div>
            <Link to="/movies/jathi-ratnalu/ET00305719" className="link">
              Jathi Ratnalu
            </Link>
            <div className="line"></div>
            <Link
              to="/movies/nenjam-marappathillai/ET00043136"
              className="link"
            >
              Nenjam Marappathillai
            </Link>
            <div className="line"></div>
            <Link to="/movies/gaali-sampath/ET00307385" className="link">
              Gaali Sampath
            </Link>
            <div className="line"></div>
            <Link to="/movies/hero/ET00306303" className="link">
              Hero
            </Link>
            <div className="line"></div>
            <Link to="/movies/a1-express/ET00113853" className="link">
              A1 Express
            </Link>
            <div className="line"></div>
            <Link to="/movies/tom-jerry-tamil/ET00304828" className="link">
              Tom &amp; Jerry
            </Link>
            <div className="line"></div>
            <Link
              to="/movies/tiny-forest-adventure-need-for-speed-7d/ET00043561"
              className="link"
            >
              Tiny Forest Adventure &amp; Need for Speed (7D)
            </Link>
          </div>
        </div>

        <div>
          <div>Upcoming Movies</div>
          <div className="movies">
            <Link to="/movies/tsunami/ET00307578" className="link">
              Tsunami
            </Link>
            <div className="line"></div>
            <Link to="/movies/srikaaram-sreekaram/ET00106100" className="link">
              Srikaaram (Sreekaram)
            </Link>
            <div className="line"></div>
            <Link to="/movies/roohi/ET00099813" className="link">
              Roohi
            </Link>
            <div className="line"></div>
            <Link to="/movies/jathi-ratnalu/ET00305719" className="link">
              Jathi Ratnalu
            </Link>
            <div className="line"></div>
            <Link to="/movies/romiyo-whisky/ET00307958" className="link">
              Romiyo Whisky
            </Link>
            <div className="line"></div>
            <Link to="/movies/puaada/ET00099872" className="link">
              Puaada
            </Link>
            <div className="line"></div>
            <Link to="/movies/gaali-sampath/ET00307385" className="link">
              Gaali Sampath
            </Link>
            <div className="line"></div>
            <Link to="/movies/tandav/ET00308037" className="link">
              Tandav
            </Link>
            <div className="line"></div>
            <Link to="/movies/aarkkariyam/ET00307366" className="link">
              Aarkkariyam
            </Link>
            <div className="line"></div>
            <Link to="/movies/the-priest/ET00305064" className="link">
              The Priest
            </Link>
            <div className="line"></div>
            <Link
              to="/movies/devarakondalo-vijay-premakatha/ET00307858"
              className="link"
            >
              Devarakondalo Vijay Premakatha
            </Link>
            <div className="line"></div>
            <Link to="/movies/roberrt/ET00121878" className="link">
              Roberrt
            </Link>
            <div className="line"></div>
            <Link to="/movies/koli-taal/ET00132563" className="link">
              Koli Taal
            </Link>
            <div className="line"></div>
            <Link to="/movies/theethum-nandrum/ET00308033" className="link">
              Theethum Nandrum
            </Link>
            <div className="line"></div>
            <Link to="/movies/time-to-dance/ET00078875" className="link">
              Time To Dance
            </Link>
            <div className="line"></div>
            <Link to="/movies/love-life-and-pakodi/ET00136443" className="link">
              Love Life And Pakodi
            </Link>
            <div className="line"></div>
            <Link to="/movies/ganesapuram/ET00306595" className="link">
              Ganesapuram
            </Link>
            <div className="line"></div>
            <Link to="/movies/varthamanam/ET00132941" className="link">
              Varthamanam
            </Link>
            <div className="line"></div>
            <Link
              to="/movies/jeene-ki-ummeed-tumse-hi/ET00307787"
              className="link"
            >
              Jeene Ki Ummeed Tumse Hi
            </Link>
            <div className="line"></div>
            <Link to="/movies/kaathal-ithu-kaathal/ET00308060" className="link">
              Kaathal Ithu Kaathal
            </Link>
          </div>
        </div>

        <div>
          <div>Upcoming Movies</div>
          <div className="movies">
            <Link to="/explore/action-movies" className="link">
              Action Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/drama-movies" className="link">
              Drama Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/thriller-movies" className="link">
              Thriller Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/comedy-movies" className="link">
              Comedy Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/romantic-movies" className="link">
              Romantic Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/adventure-movies" className="link">
              Adventure Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/horror-movies" className="link">
              Horror Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/fantasy-movies" className="link">
              Fantasy Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/animation-movies" className="link">
              Animation Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/crime-movies" className="link">
              Crime Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/biography-movies" className="link">
              Biography Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/musical-movies" className="link">
              Musical Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/sci-fi-movies" className="link">
              Sci-Fi Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/mystery-movies" className="link">
              Mystery Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/suspense-movies" className="link">
              Suspense Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/period-movies" className="link">
              Period Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/Screening-movies" className="link">
              screening Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/war-movies" className="link">
              War Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/supernatural-movies" className="link">
              Supernatural Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/adult-movies" className="link">
              Adult Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/historical-movies" className="link">
              Historical Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/psychological-movies" className="link">
              Psychological Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/noir-movies" className="link">
              Noir Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/political-movies" className="link">
              Political Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/tragedy-movies" className="link">
              Tragedy Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/mythological-movies" className="link">
              Mythological Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/devotional-movies" className="link">
              Devotional Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/bollywood-movies" className="link">
              Bollywood Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/adaptation-movies" className="link">
              Adaptation Movies
            </Link>
            <div className="line"></div>
            <Link to="/explore/classic-movies" className="link">
              Classic Movies
            </Link>
          </div>
        </div>
        <div>
          <div>Upcoming Movies</div>
          <div className="movies">
            <Link to="/explore/online-streaming-plays-plays" className="link">
              Online Streaming Plays Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/drama-plays" className="link">
              Drama Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/fantasy-plays" className="link">
              Fantasy Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/mystery-plays" className="link">
              Mystery Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/noir-plays" className="link">
              Noir Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/political-plays" className="link">
              Political Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/tragedy-plays" className="link">
              Tragedy Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/suspense-plays" className="link">
              Suspense Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/adult-plays" className="link">
              Adult Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/biography-plays" className="link">
              Biography Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/action-plays" className="link">
              Action Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/historical-plays" className="link">
              Historical Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/musical-plays" className="link">
              Musical Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/psychological-plays" className="link">
              Psychological Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/sci-fi-plays" className="link">
              Sci-Fi Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/broadway-plays" className="link">
              Broadway Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/period-plays" className="link">
              Period Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/war-plays" className="link">
              War Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/adventure-plays" className="link">
              Adventure Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/mythological-plays" className="link">
              Mythological Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/regional-plays" className="link">
              Regional Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/horror-plays" className="link">
              Horror Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/adaptation-plays" className="link">
              Adaptation Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/classic-plays" className="link">
              Classic Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/tribute-plays" className="link">
              Tribute Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/romantic-plays" className="link">
              Romantic Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/contemporary-plays" className="link">
              Contemporary Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/comedy-plays" className="link">
              Comedy Plays
            </Link>
            <div className="line"></div>
            <Link to="/explore/thriller-plays" className="link">
              Thriller Plays
            </Link>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="part4">
        <div></div>
        <svg
          viewBox="0 0 88 26"
          height="33.9"
          width="115"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>BookMyShow</title>
          <g fill="none">
            <path
              d="M55.433 7.383l-1.444-2.43-2.583 1.213-1.444-2.43L47.38 4.95l-1.445-2.43-2.582 1.215-1.445-2.43-2.582 1.212L37.88.087 35.3 1.3l-5.476 17.591 6.643 2.005a3.516 3.516 0 0 1 3.363-2.45c1.944 0 3.52 1.557 3.52 3.478l-.001.07c.016.315-.021.634-.118.946l6.756 2.042 5.446-17.6"
              fill="#C4242B"
            ></path>
            <path
              d="M35.52 17.438a.705.705 0 0 1-.591-.705V8.122a.715.715 0 0 1 .724-.717h6.297c.164 0 .329.016.489.043a2.798 2.798 0 0 1 2.336 2.749v6.536a.705.705 0 0 1-.217.51.73.73 0 0 1-.641.195.704.704 0 0 1-.59-.705v-6.536a1.363 1.363 0 0 0-1.377-1.358h-1.372v7.894a.723.723 0 0 1-.86.705.705.705 0 0 1-.59-.705V8.838h-2.75v7.895a.704.704 0 0 1-.216.51.728.728 0 0 1-.642.195M45.99 21.19a.704.704 0 0 1-.592-.706c0-.195.074-.377.209-.51a.73.73 0 0 1 .516-.206c.61 0 1.14-.39 1.315-.97l.748-2.462-2.448-8.083a.722.722 0 0 1 .483-.904.742.742 0 0 1 .896.473l1.82 6.03 1.839-6.026c.091-.34.46-.556.839-.49l.051.011c.392.121.608.528.489.907l-2.52 8.295-.796 2.655c-.206.61-.56 1.106-1.022 1.44-.5.365-1.086.557-1.694.557a.708.708 0 0 1-.133-.012M1.614 15.87h1.428c.788 0 1.43-.633 1.43-1.413v-4.141c0-.687-.498-1.272-1.183-1.391a1.501 1.501 0 0 0-.247-.022l-1.43.001.002 6.965zM.72 17.347a.732.732 0 0 1-.616-.734V3.758c0-.203.077-.391.218-.53a.751.751 0 0 1 .666-.203c.362.062.624.37.624.734v3.656h1.43a2.91 2.91 0 0 1 2.938 2.901l-.001 4.141c0 1.601-1.318 2.902-2.938 2.902H.86a.676.676 0 0 1-.14-.011zM11.096 8.839a1.478 1.478 0 0 0-.246-.02c-.801 0-1.43.62-1.43 1.412v4.313a1.413 1.413 0 0 0 1.43 1.412c.788 0 1.429-.632 1.43-1.412l-.001-4.313c0-.688-.498-1.272-1.183-1.392m-.763 8.564a2.905 2.905 0 0 1-2.42-2.86V10.23c0-.778.304-1.507.858-2.054a2.94 2.94 0 0 1 2.079-.847 2.91 2.91 0 0 1 2.938 2.902l-.001 4.313c0 .775-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847 2.948 2.948 0 0 1-.517-.043M18.902 8.839a1.47 1.47 0 0 0-.245-.02c-.802 0-1.428.62-1.428 1.412v4.313a1.412 1.412 0 0 0 1.428 1.412c.378 0 .733-.146 1.005-.41.273-.268.424-.624.424-1.002V10.23c0-.687-.498-1.27-1.184-1.391m-.762 8.564a2.907 2.907 0 0 1-2.42-2.859v-4.313c0-1.601 1.317-2.903 2.937-2.903.17 0 .34.014.506.043a2.91 2.91 0 0 1 2.431 2.86v4.313c0 .777-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847c-.174 0-.348-.014-.517-.043M24.142 17.434a.733.733 0 0 1-.614-.733V3.758a.735.735 0 0 1 .753-.745.746.746 0 0 1 .754.745v7.66l3.474-3.843a.766.766 0 0 1 .697-.228c.139.024.27.085.379.175.309.28.33.75.052 1.048l-2.615 2.88 2.717 4.902a.705.705 0 0 1 .066.553.732.732 0 0 1-.37.443.755.755 0 0 1-.5.082.749.749 0 0 1-.526-.356l-2.444-4.433-.93 1.013v3.047c0 .202-.08.39-.225.532a.758.758 0 0 1-.668.201M57.41 17.426a2.782 2.782 0 0 1-1.96-1.355.75.75 0 0 1-.068-.569.739.739 0 0 1 .346-.45c.15-.084.33-.114.505-.084a.75.75 0 0 1 .525.358c.199.335.509.546.895.614.42.066.803-.048 1.116-.316.29-.267.442-.648.404-1.016a1.22 1.22 0 0 0-.548-.964l-2.031-1.425a2.708 2.708 0 0 1-1.155-2.013 2.642 2.642 0 0 1 .884-2.152 2.754 2.754 0 0 1 2.24-.694h.001c.856.15 1.555.63 1.95 1.323a.746.746 0 0 1 .07.563.747.747 0 0 1-.348.454.757.757 0 0 1-.504.083.747.747 0 0 1-.526-.357c-.172-.3-.482-.51-.856-.575a1.189 1.189 0 0 0-1.021.296c-.26.238-.403.596-.382.96.019.351.22.694.523.894l2.032 1.404a2.729 2.729 0 0 1 1.177 2.101 2.651 2.651 0 0 1-.906 2.214 2.84 2.84 0 0 1-2.307.714l-.055-.008M63.246 17.447a.75.75 0 0 1-.625-.735V3.77c0-.202.08-.39.226-.533a.762.762 0 0 1 .667-.2.733.733 0 0 1 .615.733v3.655h1.43c.174 0 .348.015.516.045a2.902 2.902 0 0 1 2.42 2.857l.001 6.385a.741.741 0 0 1-.883.734.747.747 0 0 1-.625-.735v-6.384a1.41 1.41 0 0 0-1.43-1.412h-1.429v7.797a.742.742 0 0 1-.754.746.781.781 0 0 1-.13-.01M73.609 8.85a1.429 1.429 0 0 0-1.26.39c-.268.265-.416.62-.416 1v4.316c0 .686.494 1.27 1.173 1.388a1.43 1.43 0 0 0 1.261-.388c.274-.268.424-.622.424-1.001V10.24c0-.687-.497-1.272-1.182-1.391m-.763 8.563a2.903 2.903 0 0 1-2.42-2.857V10.24c-.001-1.6 1.317-2.902 2.937-2.902.169 0 .34.013.506.043a2.91 2.91 0 0 1 2.43 2.859v4.315a2.856 2.856 0 0 1-.867 2.054 2.938 2.938 0 0 1-2.586.803M87.892 8.254a.712.712 0 0 0-.077-.545.781.781 0 0 0-.49-.342.747.747 0 0 0-.864.546 920.42 920.42 0 0 1-1.452 5.726l-.014.056-.013-.056c-.62-2.458-1.447-5.69-1.456-5.724a.706.706 0 0 0-.58-.55.75.75 0 0 0-.85.548c-.01.03-.819 3.268-1.454 5.726l-.014.056-.014-.056c-.618-2.458-1.447-5.695-1.455-5.726a.74.74 0 0 0-.889-.536.73.73 0 0 0-.542.877l2.185 8.632a.754.754 0 0 0 .714.556.708.708 0 0 0 .715-.557c.008-.033.837-3.27 1.456-5.73l.013-.054.016.054c.64 2.483 1.451 5.73 1.452 5.732a.754.754 0 0 0 .715.556.71.71 0 0 0 .714-.559l2.184-8.63"
              fill="#FFF"
            ></path>
          </g>
        </svg>
        <div></div>
      </div>

      <div className="part5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 98 98">
          <path d="M48 .5C21.8.5.5 21.8.5 48S21.8 95.5 48 95.5 95.5 74.2 95.5 48 74.2.5 48 .5zm11.8 49.2h-7.7v27.5H40.6V49.7h-5.4V40h5.4v-6.3c0-4.5 2.1-11.6 11.6-11.6h8.5v9.4h-6.2c-1 0-2.4.5-2.4 2.7v5.7h8.7l-1 9.8z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 98 98">
          <path d="M48 .5C21.8.5.5 21.8.5 48S21.8 95.5 48 95.5 95.5 74.2 95.5 48 74.2.5 48 .5zm21.2 36.6v1.4c0 14.4-11 31.1-31.1 31.1-6.2 0-11.9-1.8-16.8-4.9.9.1 1.7.2 2.6.2 5.1 0 9.8-1.7 13.6-4.7-4.8-.1-8.8-3.2-10.2-7.6.7.1 1.4.2 2.1.2 1 0 2-.1 2.9-.4-5-1-8.8-5.4-8.8-10.7v-.1c1.5.8 3.2 1.3 4.9 1.4-2.9-2-4.9-5.3-4.9-9.1 0-2 .5-3.9 1.5-5.5 5.4 6.6 13.4 11 22.5 11.4a10.93 10.93 0 0 1 10.6-13.4c3.1 0 6 1.3 8 3.5 2.5-.5 4.8-1.4 6.9-2.7-.8 2.6-2.6 4.7-4.8 6 2.2-.3 4.3-.8 6.3-1.7-1.3 2.2-3.2 4.1-5.3 5.6z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
          <path d="M50 59a8.96 8.96 0 0 0 7.3-14.2 8.9 8.9 0 0 0-14.6 0A8.96 8.96 0 0 0 50 59zm19.7-20v-8.7H61V39z"></path>
          <path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm25.6 39.8v20.9c0 5.4-4.4 9.9-9.9 9.9H34.3c-5.4 0-9.9-4.4-9.9-9.9V34.3c0-5.4 4.4-9.9 9.9-9.9h31.4c5.4 0 9.9 4.4 9.9 9.9v10.5z"></path>
          <path d="M64.1 50c0 7.7-6.2 14-14 14a13.98 13.98 0 0 1-13-19.2h-7.6v20.9c0 2.7 2.2 4.9 4.9 4.9h31.4c2.7 0 4.9-2.2 4.9-4.9V44.8H63c.7 1.5 1.1 3.4 1.1 5.2z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
          <path d="M43.6 57.7c5.3-2.7 10.5-5.4 15.7-8.2-5.3-2.8-10.5-5.5-15.7-8.2v16.4z"></path>
          <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm23.9 59.2c-.6 2.6-2.8 4.6-5.4 4.9-6.1.7-12.4.7-18.5.7-6.2 0-12.4 0-18.5-.7-2.6-.3-4.7-2.2-5.4-4.9-.9-3.8-.9-7.8-.9-11.7s0-8 .9-11.7c.6-2.6 2.8-4.6 5.4-4.9 6.1-.7 12.4-.7 18.5-.7 6.2 0 12.4 0 18.5.7 2.6.3 4.7 2.2 5.4 4.9.9 3.8.9 7.8.9 11.7s0 8-.9 11.7z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
          <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm4.9 58.1c-2.9 0-5.7-1.6-6.7-3.4l-1.9 7.5c-1.2 4.3-4.7 8.6-4.9 8.9-.2.2-.6.2-.7-.2-.1-.6-1-6 .1-10.4.5-2.2 3.5-14.9 3.5-14.9s-.9-1.7-.9-4.3c0-4 2.3-7.1 5.3-7.1 2.5 0 3.7 1.9 3.7 4.1 0 2.5-1.6 6.2-2.4 9.7-.7 2.9 1.4 5.3 4.3 5.3 5.2 0 8.6-6.6 8.6-14.5 0-6-4-10.5-11.3-10.5-8.3 0-13.4 6.2-13.4 13.1 0 2.4.7 4.1 1.8 5.3.5.6.6.8.4 1.5-.1.5-.4 1.7-.6 2.2-.2.7-.7.9-1.4.7-3.8-1.5-5.6-5.7-5.6-10.4 0-7.7 6.5-17 19.5-17 10.4 0 17.3 7.5 17.3 15.6 0 10.8-5.9 18.8-14.7 18.8z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
          <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm-7.8 63.9h-8.6V36.3h8.6v30.1zm-4-32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm34.1 32h-8.6V47.8c0-2.2-.6-3.7-3.3-3.7-4.4 0-5.3 3.7-5.3 3.7v18.6h-8.6V36.3h8.6v2.9c1.2-.9 4.3-2.9 8.6-2.9 2.8 0 8.6 1.7 8.6 11.7v18.4z"></path>
        </svg>
      </div>

      <div className="part6">
        <div>
          Copyright 2021 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </div>
        <div>
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied.
        </div>
        <div>Unauthorized use is prohibited and punishable by law.</div>
      </div>
    </div>
  );
};

export default Footer;
