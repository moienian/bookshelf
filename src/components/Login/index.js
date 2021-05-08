import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import book from "images/books.png";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <div className="login__logo">
          <img src={book} alt="bookshelf logo" />
          <Typography variant="h5" component="h1">
            Bookshelf
          </Typography>
        </div>
        <form>
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
          <TextField
            variant="outlined"
            label="Password"
            fullWidth
            margin="normal"
            id="password"
            name="password"
            autoComplete="current-password"
            type="password"
            required
          />
          <FormControlLabel
            control={<Checkbox color="primary" value="remember" />}
            label="Remember me"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            Sing In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link href="#" color="inherit">
              Bookshelf
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
