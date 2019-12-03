import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import history from "./history";
import "./App.css";

// Components
import AppNavbar from "./components/AppNavbar";
import AuthenticatedComponent from "./components/AuthenticatedComponent";
import Home from "./components/Home";
import EditHome from "./components/EditHome";
import Gallery from "./components/Gallery";
import Associations from "./components/Associations";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import LifeCoaching from "./components/LifeCoaching";
import Footer from "./components/Footer";
import Workshops from "./components/Workshops";
import Courses from "./components/Courses";
import EditImage from "./components/EditImage";

class App extends Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this);
    this.login = this.login.bind(this);
    this.verify = this.verify.bind(this);
    this.logout = this.logout.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      loggedIn: false,
      user: {}
    };
  }

  getUser() {
    axios.get("/users/").then(response => {
      console.log("Get user response: ");
      console.log("This is the get response.data: " + response.data);
      if (response.data) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: response.data.loggedIn,
          user: response.data
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  login(route, user, cb) {
    console.log(user);
    //in production a .catch(err => console.log(err)) should be implemented
    axios.post(route, user).then(response => {
      //set own state and execute the callback
      if (response.data.success) {
        this.setState({
          loggedIn: true
        });

        //console.log(`Successfully logged in! ${JSON.stringify(response.data)}`);
      }
      cb(response.data);
    });
  }

  verify(route, cb) {
    axios.get(route).then(response => {
      //on success res.data has: success, message, user.name, user.email, user.logggedIn
      if (!response.data.success) {
        this.setState({
          loggedIn: response.data.user.loggedIn
        });
      } else {
        this.setState({
          user: response.data.user,
          loggedIn: response.data.user.loggedIn
        });
      }
      cb(response.data);
    });
  }

  logout(route) {
    axios.post(route).then(response => {
      console.log(response.data);
      if (response.data.success) {
        this.setState({
          loggedIn: false,
          user: {}
        });
        console.log("Logout was successful!");
        window.location = "/users/login";
      } else {
        console.log("Logout out failed - server error");
      }
    });
  }

  updateUser(user) {
    console.log(this.state.loggedIn);
    this.setState({ loggedIn: user.loggedIn, user: user });
  }

  componentDidMount() {
    // this.getUser();
  }

  render() {
    return (
      <Router history={history}>
        <AppNavbar
          user={this.state.user}
          loggedIn={this.state.loggedIn}
          updateUser={this.updateUser}
          logout={this.logout}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home loggedIn={this.state.loggedIn} />}
          />
          <Route path="/update/:id" component={EditHome} />
          <Route path="/users/register" component={Register} />
          <Route
            path="/users/login"
            render={() => (
              <Login login={this.login} loggedIn={this.state.loggedIn} />
            )}
          />
          <Route path="/courses" render={() => <Courses />} />
          <Route
            path="/gallery"
            render={() => <Gallery loggedIn={this.state.loggedIn} />}
          />
          <Route path="/gallery/update/:id" component={EditImage} />
          <Route path="/Associations" render={() => <Associations loggedIn={this.state.loggedIn} />} />
          <Route path="/lifecoaching" component={LifeCoaching} />
          <Route path="/Workshops" render={() => <Workshops />} />
          <AuthenticatedComponent verify={this.verify}>
            <Route
              path="/dashboard"
              render={() => (
                <Dashboard
                  loggedIn={this.state.loggedIn}
                  user={this.state.user}
                />
              )}
            />
          </AuthenticatedComponent>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
