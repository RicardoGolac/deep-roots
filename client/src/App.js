import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import history from "./history";
import "./App.css";

<<<<<<< HEAD
// Components
import AppNavbar from "./components/AppNavbar";
import AuthenticatedComponent from "./components/AuthenticatedComponent";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Associations from "./components/Associations";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

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
          <Route path="/" exact component={Home} />
          <Route path="/users/register" component={Register} />
          <Route
            path="/users/login"
            render={() => (
              <Login login={this.login} loggedIn={this.state.loggedIn} />
            )}
          />
          <Route path="/gallery" render={() => <Gallery />} />
          <Route path="/Associations" render={() => <Associations />} />
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
            <Route path="/protected" component={Protected} />
          </AuthenticatedComponent>
        </Switch>
      </Router>
    );
  }
=======
class App extends React.Component {

  render() { 
    return (
      <div>
        <Search 
        filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)} 
        />
        <main>
          <ShortList 
            favorites = {this.state.favorites}
            data = {this.props.data}
          />
          <NamesList 
          data={this.props.data}
          filterText = {this.state.filterText}
          addFavorites={this.addFavorites.bind(this)}
          />
          <Credit />
        </main>
      </div>
    )
  }

>>>>>>> fd71e3a4aa153ca5501cb75d7ef07f2e5e1f83dd
}

export default App;
