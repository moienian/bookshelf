import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import book from "images/books.png";
import "./Signup.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
}));

const Signup = ({ onSubmit }) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
      newsletter,
    } = e.target.elements;

    onSubmit({
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
      newsletter: newsletter.checked,
    });
  };
  return (
    <div className="signup">
      <Container component="main" maxWidth="xs">
        <div className="signup__logo">
          <img src={book} alt="bookshelf logo" />
          <Typography variant="h5" component="h1">
            Bookshelf
          </Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="First Name"
                id="firstName"
                name="firstName"
                autoFocus
                required
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Last Name"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Email Address"
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Password"
                fullWidth
                id="password"
                name="password"
                autoComplete="current-password"
                type="password"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="newsletter"
                    name="newsletter"
                  />
                }
                label="I want to receive newsletter from bookshelf"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Typography
                component={Link}
                to="/login"
                variant="body2"
                color="primary"
              >
                Already have an account? Sign In
              </Typography>
            </Grid>
          </Grid>
        </form>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © Bookshelf "}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
