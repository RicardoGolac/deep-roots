import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import axios from "axios";

const HomeAbout = props => (
  <div>
    <h1>{props.home.name}</h1>
    <p>{props.home.message}</p>
    {props.loggedIn && (
      <>
        <Link to={"/update/" + props.home._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteHome(props.home._id);
          }}
        >
          delete
        </a>
      </>
    )}
  </div>
);

class Home extends Component {
  constructor(props) {
    super(props);

    // Bind all function listed below like so
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteHome = this.deleteHome.bind(this);

    this.state = {
      name: "",
      message: "",
      // homes will hold all home objects
      homes: []
    };
  }
  // Temporary function
  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then(response => {
        const data = response.data;
        this.setState({ homes: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  onSubmit(e) {
    // This first line prevents the regular html form from doing what
    // it normally does when a submit button is pressed
    e.preventDefault();

    const home = {
      name: this.state.name,
      message: this.state.message
    };
    axios
      .post("http://localhost:5000/add", home)
      .then(res => console.log(res.data));

    // Clear the inputs
    this.setState({
      name: "",
      message: ""
    });
  }

  deleteHome(id) {
    axios
      .delete("http://localhost:5000/" + id)
      .then(res => console.log("Home deleted!"));

    this.setState({
      homes: this.state.homes.filter(el => el._id !== id)
    });
  }

  homeList() {
    if (this.state.homes.length > 0) {
      return this.state.homes.map(currentHome => {
        return (
          <HomeAbout
            home={currentHome}
            deleteHome={this.deleteHome}
            key={currentHome._id}
            loggedIn={this.props.loggedIn}
          />
        );
      });
    } else return;
  }

  render() {
    return (
      <div className="home-view-container">
        <div className="home-container">
          {/* This section is only visible when the admin is logged in */}
          {this.props.loggedIn && (
            <>
              <div>
                <h3>Admin Privleges Enabled!</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Name: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.message}
                      onChange={this.onChangeMessage}
                      height="200"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create Home Item"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </>
          )}
          {/* Everything below is always rendered */}
          <div className="home-about">{this.homeList()}</div>
          {/* Deeproots Tree */}
          <img src={require("./photos/tree.PNG")} alt="Deeproots Tree" />
        </div>
      </div>
    );
  }
}

export default Home;
