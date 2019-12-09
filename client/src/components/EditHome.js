import React, { Component } from "react";
import axios from "axios";
import "../css/home.css";

class EditHome extends Component {
  constructor(props) {
    super(props);

    // Bind all function listed below like so
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.deleteHome = this.deleteHome.bind(this);

    this.state = {
      name: "",
      message: "",
      // homes will hold all home objects
      // We will try and keep it to one
      homes: []
    };
  }

  // Temporary function
  componentDidMount() {
    axios
      .get("http://localhost:5000/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          message: res.data.message
        });
      })
      .catch(function(error) {
        //console.log(error);
      });
    axios
      .get("http://localhost:5000/")
      .then(response => {
        const data = response.data;
        this.setState({ homes: data });
        //console.log(this.state.homes);
      })
      .catch(error => {
        //console.log(error);
      });
    console.log(this.state.homes);
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
      .post("http://localhost:5000/update/" + this.props.match.params.id, home)
      .then(res => console.log(res.data));

    // Clear the inputs
    this.setState({
      name: "",
      message: ""
    });
  }

  render() {
    return (
      <div className="home-view-container">
        <div className="home-container">
          {/* This section is only visible when the admin is logged in */}

          <h3>Update Home</h3>
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
              <textarea
                type="text"
                required
                className="form-control"
                value={this.state.message}
                onChange={this.onChangeMessage}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Home Item"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditHome;
