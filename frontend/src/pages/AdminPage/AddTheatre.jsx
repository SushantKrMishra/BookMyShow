import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useSelector } from "react-redux";
const AddTheatre = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const token = useSelector((state) => state.auth.user.token);

  const handleAddTheatre = () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("http://16.171.225.190:8080/theater/add", formData, { headers })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        alert("Data sent successfully");
        setFormData({
          name: "",
          city: "",
          address: "",
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
      <Container maxWidth="md" style={{ marginTop: "24px" }}>
        <Typography variant="h4" gutterBottom>
          Add Theatre
        </Typography>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="City"
                  variant="outlined"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Address"
                  variant="outlined"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddTheatre}
              style={{ marginTop: "16px" }}
            >
              Add Theatre
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default AddTheatre;
