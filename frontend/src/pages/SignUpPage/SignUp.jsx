import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await Axios.post(
        "http://16.171.225.190:8080/User/add-user",
        formData
      );

      if (response.status === 201) {
        setSuccessMessage("Account created successfully. Please log in now!");
        setFormData({ name: "", email: "", password: "" });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        alert("Sign-up failed");
      }
    } catch (error) {
      alert("Error:", error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          {successMessage ? (
            <DialogContentText>{successMessage}</DialogContentText>
          ) : (
            <DialogContentText>
              Please fill in the following details to sign up:
            </DialogContentText>
          )}
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUp;
