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
const AddMovie = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    bannerImage: "",
    releasedate: "",
    duration: 0.0,
    category: "",
    howManyInterested: "",
    aboutTheMovie: "",
    cast: "",
    crew: "",
  });
  const [subformData, setsubFormData] = useState({
    cast1Name: "",
    cast1ImgUrl: "",
    cast2Name: "",
    cast2ImgUrl: "",
    cast3Name: "",
    cast3ImgUrl: "",
    crew1Name: "",
    crew1ImgUrl: "",
    crew2Name: "",
    crew2ImgUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const subhandleChange = (e) => {
    const { name, value } = e.target;
    setsubFormData({ ...subformData, [name]: value });
  };
  const token = useSelector((state) => state.auth.user.token);
  const handleAddMovie = async () => {
    const cast1 = `${subformData.cast1Name},${subformData.cast1ImgUrl}`;
    const cast2 = `${subformData.cast2Name},${subformData.cast2ImgUrl}`;
    const cast3 = `${subformData.cast3Name},${subformData.cast3ImgUrl}`;

    const crew1 = `${subformData.crew1Name},${subformData.crew1ImgUrl}`;
    const crew2 = `${subformData.crew2Name},${subformData.crew2ImgUrl}`;

    const fewCasts = [cast1, cast2, cast3]
      .filter((cast) => cast !== "")
      .join("|");
    const fewCrew = [crew1, crew2].filter((crew) => crew !== "").join("|");

    const formattedData = {
      ...formData,
      cast: fewCasts,
      crew: fewCrew,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(formattedData);
    await axios
      .post("http://16.171.225.190:8080/Movie/add", formattedData, { headers })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        alert("Data sent successfully");
        setFormData({
          name: "",
          image: "",
          bannerImage: "",
          releasedate: "",
          duration: 0.0,
          category: "",
          howManyInterested: "",
          aboutTheMovie: "",
          cast: "",
          crew: "",
        });
        setsubFormData({
          cast1Name: "",
          cast1ImgUrl: "",
          cast2Name: "",
          cast2ImgUrl: "",
          cast3Name: "",
          cast3ImgUrl: "",
          crew1Name: "",
          crew1ImgUrl: "",
          crew2Name: "",
          crew2ImgUrl: "",
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
          Add Movie
        </Typography>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  required
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
                  label="Image URL"
                  variant="outlined"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Banner Image URL"
                  variant="outlined"
                  name="bannerImage"
                  value={formData.bannerImage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Release Date"
                  variant="outlined"
                  name="releasedate"
                  value={formData.releasedate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Duration"
                  variant="outlined"
                  name="duration"
                  type="number"
                  inputProps={{ step: "any" }}
                  value={formData.duration}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Category"
                  variant="outlined"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Interested Count"
                  variant="outlined"
                  name="howManyInterested"
                  value={formData.howManyInterested}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="About The Movie"
                  variant="outlined"
                  name="aboutTheMovie"
                  value={formData.aboutTheMovie}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Casts
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Cast 1 Name"
                      variant="outlined"
                      name="cast1Name"
                      value={subformData.cast1Name}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Cast 1 Image URL"
                      variant="outlined"
                      name="cast1ImgUrl"
                      value={subformData.cast1ImgUrl}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Cast 2 Name"
                      variant="outlined"
                      name="cast2Name"
                      value={subformData.cast2Name}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Cast 2 Image URL"
                      variant="outlined"
                      name="cast2ImgUrl"
                      value={subformData.cast2ImgUrl}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Cast 3 Name"
                      variant="outlined"
                      name="cast3Name"
                      value={subformData.cast3Name}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Cast 3 Image URL"
                      variant="outlined"
                      name="cast3ImgUrl"
                      value={subformData.cast3ImgUrl}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Crew
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Crew 1 Name"
                      variant="outlined"
                      name="crew1Name"
                      value={subformData.crew1Name}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Crew 1 Image URL"
                      variant="outlined"
                      name="crew1ImgUrl"
                      value={subformData.crew1ImgUrl}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Crew 2 Name"
                      variant="outlined"
                      name="crew2Name"
                      value={subformData.crew2Name}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Crew 2 Image URL"
                      variant="outlined"
                      name="crew2ImgUrl"
                      value={subformData.crew2ImgUrl}
                      onChange={subhandleChange}
                      style={{ marginBottom: "8px" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddMovie}
              style={{ marginTop: "16px" }}
            >
              Add Movie
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default AddMovie;
