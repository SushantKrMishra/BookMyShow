import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const AddShow = () => {
  const [formData, setFormData] = useState({
    showDate: "",
    showTime: "",
    price: 0,
    multiplayer: 0,
    movieName: "",
    theaterId: 0,
  });
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.user.token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "price" || name === "multiplayer" || name === "theaterId"
        ? parseInt(value, 10)
        : value;
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  if (token === undefined) {
    alert("plese Re Login");
    navigate("/");
  }

  const handleSubmit = async () => {
    await axios
      .post("http://16.171.225.190:8080/show/add", formData, { headers })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        alert("Data sent successfully");
        setFormData({
          showDate: "",
          showTime: "",
          price: 0,
          multiplayer: 0,
          movieName: "",
          theaterId: 0,
        });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        alert("Error sending data");
      });
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" style={{ marginTop: "2vmax" }}>
        <Typography variant="h4" gutterBottom>
          Add Show
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Show Date"
                required
                name="showDate"
                value={formData.showDate}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Show Time"
                name="showTime"
                value={formData.showTime}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Multiplayer"
                name="multiplayer"
                type="number"
                value={formData.multiplayer}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Movie Name"
                name="movieName"
                value={formData.movieName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Theater ID"
                name="theaterId"
                type="number"
                value={formData.theaterId}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ margin: "16px" }}
              >
                Add Show
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddShow;
