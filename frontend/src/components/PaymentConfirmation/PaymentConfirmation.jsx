import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./PaymentConfirmation.css";

const PaymentConfirmation = () => {
  const navigate = useNavigate();

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const redirectToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="payment-confirmation-container">
      {redirect ? (
        redirectToHomePage()
      ) : (
        <div>
          <p className="confirmation-message">Payment is confirmed!</p>
          <p className="redirect-message">
            Redirecting to the home page in 5 seconds...
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentConfirmation;
