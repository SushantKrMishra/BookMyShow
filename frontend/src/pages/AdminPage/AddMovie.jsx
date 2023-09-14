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

const AddMovie = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    bannerImage: "",
    releaseDate: "",
    duration: "",
    category: "",
    interestedCount: "",
    aboutTheMovie: "",
    fewCasts: [""],
    fewCrew: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMovie = () => {
    const filteredCasts = formData.fewCasts.filter(
      (cast) => cast.trim() !== ""
    );
    const filteredCrew = formData.fewCrew.filter((crew) => crew.trim() !== "");

    const formattedData = {
      ...formData,
      fewCasts: filteredCasts,
      fewCrew: filteredCrew,
    };

    console.log(formattedData);

    setFormData({
      name: "",
      image: "",
      bannerImage: "",
      releaseDate: "",
      duration: "",
      category: "",
      interestedCount: "",
      aboutTheMovie: "",
      fewCasts: [""],
      fewCrew: [""],
    });
  };

  const handleAddCast = () => {
    setFormData({ ...formData, fewCasts: [...formData.fewCasts, ""] });
  };

  const handleAddCrew = () => {
    setFormData({ ...formData, fewCrew: [...formData.fewCrew, ""] });
  };

  const handleCastChange = (index, value) => {
    const updatedCasts = [...formData.fewCasts];
    updatedCasts[index] = value;
    setFormData({ ...formData, fewCasts: updatedCasts });
  };

  const handleCrewChange = (index, value) => {
    const updatedCrew = [...formData.fewCrew];
    updatedCrew[index] = value;
    setFormData({ ...formData, fewCrew: updatedCrew });
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
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
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
                  label="Release Date"
                  variant="outlined"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Duration"
                  variant="outlined"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
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
                  label="Interested Count"
                  variant="outlined"
                  name="interestedCount"
                  value={formData.interestedCount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
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
                {formData.fewCasts.map((cast, index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <TextField
                      fullWidth
                      label={`Cast ${index + 1} Name`}
                      variant="outlined"
                      value={cast.split(",")[0]}
                      onChange={(e) =>
                        handleCastChange(
                          index,
                          `${e.target.value},${
                            formData.fewCasts[index].split(",")[1]
                          }`
                        )
                      }
                      style={{ marginBottom: "8px", marginRight: "8px" }}
                    />
                    <TextField
                      fullWidth
                      label={`Cast ${index + 1} Image URL`}
                      variant="outlined"
                      value={cast.split(",")[1]}
                      onChange={(e) =>
                        handleCastChange(
                          index,
                          `${formData.fewCasts[index].split(",")[0]},${
                            e.target.value
                          }`
                        )
                      }
                    />
                  </div>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleAddCast}
                >
                  Add Cast
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Crew
                </Typography>
                {formData.fewCrew.map((crew, index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <TextField
                      fullWidth
                      label={`Crew ${index + 1} Name`}
                      variant="outlined"
                      value={crew.split(",")[0]}
                      onChange={(e) =>
                        handleCrewChange(
                          index,
                          `${e.target.value},${
                            formData.fewCrew[index].split(",")[1]
                          }`
                        )
                      }
                      style={{ marginBottom: "8px", marginRight: "8px" }}
                    />
                    <TextField
                      fullWidth
                      label={`Crew ${index + 1} Image URL`}
                      variant="outlined"
                      value={crew.split(",")[1]}
                      onChange={(e) =>
                        handleCrewChange(
                          index,
                          `${formData.fewCrew[index].split(",")[0]},${
                            e.target.value
                          }`
                        )
                      }
                      style={{ marginBottom: "8px" }}
                    />
                  </div>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleAddCrew}
                >
                  Add Crew
                </Button>
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
