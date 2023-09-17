import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./PaymentPage.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FoodCard from "../../layout/FoodCard/FoodCard";
import { useSelector } from "react-redux";
import axios from "axios";
const PaymentPage = () => {
  const [open, setOpen] = useState(true);
  const { selectedSeats, price, id } = useLocation().state;
  const [selectedFoodItems, setSelectedFoodItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user?.user);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const token = useSelector((state) => state?.auth?.user?.token) || null;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  async function displayRazorpay() {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const options = {
        key: "rzp_test_HF3NhaZyzhoJwj",
        name: "Sagar's Portal",
        description: "Flight Management",
        amount: totalPrice * 100,
        handler: async function (response) {
          const payload = {
            allotedSeats: selectedSeats,
            amount: totalPrice,
            userId: user.id,
            showId: id,
          };
          await axios
            .post(
              `http://16.171.225.190:8080/tickets/book_ticket`,

              payload,
              { headers }
            )
            .then((response) => {
              console.log("Payment Successfull");
              navigate("/payment-confirmation");
            })
            .catch((error) => {
              console.error("Error in Payment:", error);
            });
        },
        prefill: {
          name: "Sagar Gupta",
          email: "sagar@gmail.com",
          contact: "9999999999",
        },
        notes: {
          address: "Global Logic",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error loading Razorpay SDK:", error);
      alert("An error occurred while loading the Razorpay SDK.");
    }
  }
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handlePayment = () => {
    if (isAuthenticated) {
      displayRazorpay();
    } else {
      alert("Please Login");
      navigate(`/buytickets/${movieName}`);
    }
  };
  useEffect(() => {
    const ticketPrice = selectedSeats.length * price;
    const convenienceFees = 58;
    const foodItemsTotal = Object.values(selectedFoodItems).reduce(
      (total, selectedItem) =>
        total + selectedItem.mealPrice * selectedItem.quantity,
      0
    );

    const newTotalPrice = ticketPrice + convenienceFees + foodItemsTotal;

    setTotalPrice(newTotalPrice);
  }, [selectedSeats, selectedFoodItems, price]);
  const handleAddToBill = (foodItem, quantity) => {
    setSelectedFoodItems((prevItems) => {
      const updatedItems = { ...prevItems };

      if (quantity > 0) {
        updatedItems[foodItem.name] = {
          item: foodItem,
          quantity: quantity,
          mealPrice: foodItem.price,
        };
      } else {
        delete updatedItems[foodItem.name];
      }
      return updatedItems;
    });
  };

  const handleDialogBox = () => {
    setOpen(!open);
  };
  const handleCancelDialogBox = () => {
    navigate(`/buytickets/${movieName}`);
  };
  const handleIconClick = () => {
    navigate(`/buytickets/${movieName}`);
  };
  const { movieName, theatreName } = useParams();
  const mealItems = [
    {
      name: "Friends Combo",
      description: "Jumbo Tub Salted Popcorn + 2 Large Coke 810ml",
      price: 910,
      originalPrice: 1215,
      imageLink:
        "https://in.bmscdn.com/fnb/v3/xxhdpi/2000489_01082023133858.png",
      category: "Combos",
    },
    {
      name: "Jumbo Salted Popcorn",
      description: "Jumbo  Salted Popcorn",
      price: 480,
      originalPrice: 0,
      imageLink:
        "https://in.bmscdn.com/fnb/v3/xxhdpi/2001054_26122022174031.png",
      category: "Popcorn",
    },
    {
      name: "Coke 810ml",
      description: "Coke 810ml",
      price: 370,
      originalPrice: 0,
      imageLink:
        "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
      category: "Beverages",
    },
    {
      name: "Coke 580ml",
      description: "Coke 580ml",
      price: 350,
      originalPrice: 0,
      imageLink:
        "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
      category: "Beverages",
    },
    {
      name: "Nachos Combo",
      description: "Jumbo Tub Salted Popcorn + Nachos + Large Coke 810ml",
      price: 890,
      originalPrice: 1190,
      imageLink:
        "https://in.bmscdn.com/fnb/v3/xxhdpi/2000492_01082023133741.png",
      category: "Combos",
    },
    {
      name: "Jumbo Caramel Popcorn",
      description: "Jumbo Caramel Popcorn",
      price: 520,
      originalPrice: 0,
      imageLink:
        "https://in.bmscdn.com/fnb/v3/xxhdpi/2000492_01082023133741.png",
      category: "Popcorn",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredItems =
    selectedCategory === "All"
      ? mealItems
      : mealItems.filter((item) => item.category === selectedCategory);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Dialog open={open} onClose={handleDialogBox}>
        <DialogTitle>Notes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span className="mainNotice">
              To ensure a smooth and enjoyable experience for you, we request
              you to check the public transport schedules and routes recommended
              by Delhi Traffic Police (as part of G-20 advisory) in advance to
              ensure you arrive on time for your movie (only applicable for show
              dates between 7-10 September). We encourage you to use public
              transport as your mode of transportation as only limited parking
              is available at the venue.
            </span>
            <br />
            <span className="secondaryNotice">
              1. Ticket is mandatory for 3 years+ aged children. <br /> 2.
              Person below 18 years cannot be admitted for `A` certified movies.
              <br /> 3. Items like laptops, cameras, knives, lighter,
              matchboxes, cigarettes, firearms, and inflammable objects are
              strictly prohibited.
              <br /> 4. Items like carrying bags, eatables, helmets, and
              handbags are strictly prohibited inside the theatre and should be
              deposited at the baggage counter of the mall /cinema.
              <br /> 5. 3D movie ticket price includes 3D glass usage charges.
              <br /> 6. Seat layout page of Audi is for representational
              purposes and the actual seat layout might vary.
              <br /> 7. Outside food & beverages are not allowed on the cinema
              premises.
              <br /> 8. Decision(s) taken by Cinepolis management is final &
              abiding.
              <br /> 9. Purchased tickets cannot be cancelled, exchanged, or
              refunded.
              <br /> 10. Cinepolis may contact the guest to seek feedback for
              service improvement.
              <br /> 11. Patrons under the influence of alcohol or drugs will
              not be allowed inside the cinema premises.
              <br /> 12. Pre-booked food & beverage needs to be collected from
              F&B counter (except in VIP Cinemas).
              <br /> 13. Wearing the mask is mandatory (as per guidelines of the
              local authority).
              <br /> 14.Movie schedules and rates are subject to change without
              prior notice.
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancelDialogBox}
            style={{
              color: "#f84464ff",
              backgroundColor: "white",
              width: "50%",
              border: "1px solid #f84464ff",
            }}
          >
            cancel
          </Button>

          <Button
            onClick={handleDialogBox}
            style={{
              color: "white",
              backgroundColor: "#f84464ff",
              width: "50%",
            }}
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
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
      <div className="paymentPage">
        <div className="left-section">
          <Carousel autoPlay showThumbs={false}>
            <div>
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688188454571_855x95.jpg"
                alt="banner 1"
              />
            </div>
            <div>
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692195729570_25web.png"
                alt="banner 2"
              />
            </div>
          </Carousel>
          <div className="foodItems">
            <span>
              <h2>Grab a bite!</h2>
              <span>Prebook Your Meal and Save More!</span>
            </span>
            <div className="foodItemsSection">
              <div className="category-buttons">
                <span
                  onClick={() => setSelectedCategory("All")}
                  className={selectedCategory === "All" ? "activeCategory" : ""}
                >
                  All
                </span>
                <span
                  onClick={() => setSelectedCategory("Combos")}
                  className={
                    selectedCategory === "Combos" ? "activeCategory" : ""
                  }
                >
                  Combos
                </span>
                <span
                  onClick={() => setSelectedCategory("Popcorn")}
                  className={
                    selectedCategory === "Popcorn" ? "activeCategory" : ""
                  }
                >
                  Popcorn
                </span>
                <span
                  onClick={() => setSelectedCategory("Beverages")}
                  className={
                    selectedCategory === "Beverages" ? "activeCategory" : ""
                  }
                >
                  Beverages
                </span>
              </div>

              <div className="foodItemsSection-main">
                {filteredItems.map((item, index) => (
                  <FoodCard
                    item={item}
                    key={index}
                    addToBill={handleAddToBill}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <span>Booking Summary</span>
          <div className="selected-seats">
            <strong>Selected Seats:</strong>
            {selectedSeats && selectedSeats.length > 0 ? (
              <div>{selectedSeats.map((seat) => seat + ", ")}</div>
            ) : (
              <span>No seats selected.</span>
            )}
          </div>
          <div className="ticket-Price">
            <div>
              Ticket Price :
              <span>
                ₹{selectedSeats.length * price} ({selectedSeats.length} Ticket)
              </span>
            </div>
            <div>
              Convenience fees : <span>₹ 58</span>
            </div>
            <div>
              Sub Total : <span>₹ {selectedSeats.length * price + 58}</span>
            </div>
            <div className="selectedFoodItem-container">
              {Object.keys(selectedFoodItems).length > 0 && (
                <div>Selected Food Items:</div>
              )}

              {Object.values(selectedFoodItems).map((selectedItem, index) => (
                <div className="foodItem-container">
                  <div key={index}>
                    {selectedItem.item.name} - Quantity: {selectedItem.quantity}
                  </div>
                  <div className="foodItem-Price">
                    ₹ {selectedItem.mealPrice * selectedItem.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="total-Price">
            <span>Amount Payable</span>
            <span>₹ {totalPrice}</span>
          </div>
          <div className="ticket-type">
            <div>
              <span> SELECT TICKET TYPE</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#f84464ff"
                  className="w-6 h-6 circleIcon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ticketIcon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
                <span className="ticket-type-selector">M-Ticket</span>
              </span>
            </div>
          </div>
          <div className="finalPrice-container">
            <div className="finalPrice">
              <span>Total: ₹ {totalPrice}</span>
              <span onClick={handlePayment}>Proceed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
