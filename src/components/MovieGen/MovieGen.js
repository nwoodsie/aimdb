import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./MovieGen.css";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#f3ce13ed",

      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

function onSubmitFunc(title, characters, genre, tone) {
    console.log(title, characters, genre, tone);
  }

const promptEndPoint =
  "http://ec2-54-183-191-117.us-west-1.compute.amazonaws.com:5000/movie_directory/build_movie";

const MovieGen = () => {
  const defaultValues = {
    title: "",
    characters: "",
    genre: "",
    tone: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  

  return (
    <div className="movieGenWrapper">
      <div className="movieGenTitle">Generate A Movie</div>
      <form>
        <ThemeProvider theme={theme}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formValues.title}
            margin="normal"
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="characters"
            name="characters"
            label="Characters"
            value={formValues.characters}
            margin="normal"
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="genre"
            name="genre"
            label="Genre"
            value={formValues.genre}
            margin="normal"
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="tone"
            name="tone"
            label="Tone"
            value={formValues.tone}
            margin="normal"
            variant="filled"
            onChange={handleInputChange}
          />
          <Button
            sx={{ mt: 10 }}
            variant="contained"
            fullWidth
            type="submit"
            style={{ marginTop: "1.2rem" }}
            onHover={onSubmitFunc(
              formValues.title,
              formValues.characters,
              formValues.genre,
              formValues.tone
            )}
          >
            Submit
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default MovieGen;
