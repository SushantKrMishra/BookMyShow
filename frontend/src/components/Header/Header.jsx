import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Button,
  TextField,
  Divider,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../userActions";
const location = [
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    name: "Mumbai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
    name: "Delhi",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    name: "Bangaluru",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
    name: "Hyderabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    name: "Ahemdabad",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    name: "Chandigarh",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    name: "Chennai",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    name: "Pune",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    name: "Kolkata",
  },
  {
    link: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
    name: "Kochi",
  },
];
const Header = () => {
  const [cityName, setCityName] = useState("Select City");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { pathname } = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state?.auth?.user?.user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleCityClick = () => {
    setDialogOpen(true);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLoginDialog = () => {
    setAuthDialogOpen(true);
  };
  const handleLocationSelect = (selectedLocation) => {
    setCityName(selectedLocation.name);
    setSelectedLocation(selectedLocation);
    setDialogOpen(false);
  };
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(formData.username, formData.password));
    setIsMenuOpen(false);
    if (isAuthenticated) {
      alert("Login successful");
    } else {
      alert("Invalid Credentials");
    }
    setAuthDialogOpen(false);
  };
  const { movieName } = useParams();
  useEffect(() => {
    if (pathname.includes("/buytickets/")) {
      setDialogOpen(true);
      if (selectedLocation) {
        const payload = {
          city: selectedLocation ? selectedLocation?.name : "Delhi",
          name: movieName,
        };
        navigate(`/buytickets/${movieName}`, { state: { payload } });
        setDialogOpen(false);
      }
    }
  }, [pathname, selectedLocation]);
  return (
    <>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
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
        </div>
        <div className="searchBar">
          <svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            className="searchIcon"
          >
            <title>Search</title>
            <path
              d="M11.8 10.864L8.859 7.918a4.912 4.912 0 0 0-.444-6.47A4.888 4.888 0 0 0 4.928 0a4.888 4.888 0 0 0-3.485 1.449 4.942 4.942 0 0 0 0 6.979 4.888 4.888 0 0 0 3.485 1.449c1.052 0 2.105-.33 2.976-1.005l2.96 2.93a.658.658 0 0 0 .476.198.686.686 0 0 0 .477-.198.672.672 0 0 0-.016-.938zm-6.855-2.32c-.97 0-1.858-.38-2.549-1.054C1 6.09 1 3.802 2.396 2.387a3.578 3.578 0 0 1 2.549-1.054c.97 0 1.858.379 2.548 1.054s1.052 1.58 1.052 2.551c0 .971-.378 1.86-1.052 2.552a3.539 3.539 0 0 1-2.548 1.053z"
              fill="#777"
            ></path>
          </svg>

          <input
            type="text"
            name=""
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
        <div className="location" onClick={handleCityClick}>
          <span title="Location">{cityName}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-1 h-1 dropDownIcon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {isAuthenticated ? (
          <div className="userNameDisplay">
            <span>Hi, {user.name} !</span>
          </div>
        ) : (
          <div className="authButton" onClick={handleLoginDialog}>
            <span>Sign In</span>
          </div>
        )}
        <div className="moreMenu" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 menuButton"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {isAuthenticated ? (
            <div className={`menuContainer ${isMenuOpen ? "open" : ""}`}>
              <div
                className="menuOption"
                onClick={() => {
                  navigate("/my-bookings");
                }}
              >
                My Booking History
              </div>
              {user.role === "ROLE_ADMIN" ? (
                <>
                  <div
                    className="menuOption"
                    onClick={() => {
                      navigate("/addMovie_admin");
                    }}
                  >
                    Add Movie
                  </div>
                  <div
                    className="menuOption"
                    onClick={() => {
                      navigate("/addTheatre_admin");
                    }}
                  >
                    Add Theatre
                  </div>
                  <div
                    className="menuOption"
                    onClick={() => {
                      navigate("/addShow_admin");
                    }}
                  >
                    Add Show
                  </div>
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <div className="secondNav">
        <div>
          <Link className="link" to="">
            Movies
          </Link>
          <Link className="link" to="">
            Stream
          </Link>
          <Link className="link" to="">
            Events
          </Link>
          <Link className="link" to="">
            Plays
          </Link>
          <Link className="link" to="">
            Sports
          </Link>
          <Link className="link" to="">
            Activities
          </Link>
          <Link className="link" to="">
            Fanhood
          </Link>
          <Link className="link" to="">
            Buzz
          </Link>
        </div>
        <div>
          <Link className="link" to="">
            Listyourshow
          </Link>
          <Link className="link" to="">
            Corporates
          </Link>
          <Link className="link" to="">
            Offers
          </Link>
          <Link className="link" to="">
            Gift Cards
          </Link>
        </div>
      </div>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Select a City</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {location.map((loc) => (
              <ListItem
                button
                key={loc.name}
                onClick={() => handleLocationSelect(loc)}
                sx={{ width: "50%", boxSizing: "border-box", padding: "8px" }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={loc.name}
                    src={
                      selectedLocation === loc
                        ? loc.link.replace(".png", "-selected.png")
                        : loc.link
                    }
                  />
                </ListItemAvatar>
                <ListItemText primary={loc.name} />
              </ListItem>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog open={authDialogOpen} onClose={() => setAuthDialogOpen(false)}>
        <DialogTitle style={{ textAlign: "center" }}>Login</DialogTitle>
        <DialogContent dividers>
          <div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FacebookIcon />}
              fullWidth
              style={{ marginBottom: "8px" }}
            >
              Continue with Facebook
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<GoogleIcon />}
              fullWidth
            >
              Continue with Google
            </Button>
            <Divider sx={{ my: 2 }}>OR</Divider>
            <div>
              <Typography variant="body2" style={{ textAlign: "center" }}>
                Continue with your UserName and Password
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "10px",
                  gap: "10px",
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="yourUsername"
                  margin="dense"
                  fullWidth
                  required
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />

                <TextField
                  variant="outlined"
                  placeholder="Password"
                  fullWidth
                  name="password"
                  type="password"
                  required
                  margin="dense"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#f84464",
                  marginTop: "10px",
                  width: "100%",
                  textAlign: "center",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
            <Typography variant="body2" sx={{ mt: 2 }}>
              By continuing, you agree to the{" "}
              <Link href="#" color="textSecondary">
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" color="textSecondary">
                Privacy Policy
              </Link>
            </Typography>
            <Typography
              variant="body2"
              style={{ textAlign: "center", marginTop: "1vmax", color: "grey" }}
            >
              Didn't have account?{" "}
              <span
                style={{ color: "#f84464", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
