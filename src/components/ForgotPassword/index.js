import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import book from "images/books.png";
import { makeStyles } from "@material-ui/core/styles";
import "./ForgotPassword.css";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ForgotPassword = ({ onSubmit }) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = e.target.elements;

    onSubmit({
      email: email.value,
    });
  };
  return (
    <div className="forgot">
      <Container component="main" maxWidth="xs">
        <div className="forgot__logo">
          <img src={book} alt="bookshelf logo" />
          <Typography variant="h5" component="h1">
            Bookshelf
          </Typography>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            label="Email Address"
            fullWidth
            margin="normal"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            Reset Password
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

export default ForgotPassword;
