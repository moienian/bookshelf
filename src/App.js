import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const login = (formData) => {
    console.log("login", formData);
  };

  const register = (formData) => {
    console.log("register", formData);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login onSubmit={login} />
          </Route>
          <Route exact path="/signup">
            <Signup onSubmit={register} />
          </Route>
          <Route exact path="/">
            <Login onSubmit={login} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
