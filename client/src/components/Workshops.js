import React, { Component } from "react";
import "./../css/Workshops.css";
import axios from "axios";
import { Link } from "react-router-dom";

const WorkshopItem = props => (
  <div>
    {props.workshop.sectionTitle && <h1> {props.workshop.sectionTitle} </h1>}
    {props.workshop.title && <h2> {props.workshop.title} </h2>}
    {props.workshop.contents && <p> {props.workshop.contents} </p>}
    <br />
    {props.workshop.price && <p> {props.workshop.price} </p>}
    {!props.loggedIn && <a href="#calendar">Go to Calendar</a>}
    {props.loggedIn && (
      <>
        <Link to={"/workshops/update/" + props.workshop._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteWorkshop(props.workshop._id);
          }}
        >
          delete
        </a>
      </>
    )}
  </div>
);

class Workshops extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeST = this.onChangeST.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContents = this.onChangeContents.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.deleteWorkshop = this.deleteWorkshop.bind(this);
    this.state = {
      id: "",
      sectionTitle: "",
      title: "",
      contents: "",
      price: "",
      workshopsArray: []
    };
  }

  componentWillMount() {
    axios
      .get("/workshops/")
      .then(res => {
        const data = res.data;
        this.setState({ workshopsArray: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeST(e) {
    this.setState({
      sectionTitle: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeContents(e) {
    this.setState({
      contents: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onSubmit(e) {
    // This first line prevents the regular html form from doing what
    // it normally does when a submit button is pressed
    e.preventDefault();

    const workshop = {
      sectionTitle: this.state.sectionTitle,
      title: this.state.title,
      contents: this.state.contents,
      price: this.state.price
    };
    axios.post("/workshops/add", workshop).then(res => console.log(res.data));

    // Clear the inputs
    this.setState({
      sectionTitle: "",
      title: "",
      contents: "",
      price: ""
    });
  }

  deleteWorkshop(id) {
    axios
      .delete("/workshops/" + id)
      .then(res => console.log("Object deleted: " + res.data))
      .catch(err => {
        console.log(err);
      });

    this.setState({
      workshopsArray: this.state.workshopsArray.filter(el => el._id !== id)
    });
  }
  workshopList() {
    return this.state.workshopsArray.map(curWorkshop => {
      return (
        <WorkshopItem
          workshop={curWorkshop}
          deleteWorkshop={this.deleteWorkshop}
          key={curWorkshop._id}
          loggedIn={this.props.loggedIn}
        />
      );
    });
  }

  render() {
    return (
      <div class="workshops-container container-fluid text-center">
        <div class="container">
          <h2>Workshops</h2>
          <h3>Let's Grow Together</h3>
          {this.props.loggedIn && (
            <>
              <div>
                <h3>Admin Privleges Enabled!</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Section Title: </label>
                    <textarea
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeST}
                    />
                  </div>
                  <div className="form-group">
                    <label>Title: </label>
                    <textarea
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeTitle}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contents: </label>
                    <textarea
                      type="text"
                      className="form-control"
                      value={this.state.message}
                      onChange={this.onChangeContents}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price: </label>
                    <textarea
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangePrice}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create Workshop"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </>
          )}
          <div class="row text-center">
            <div class="col text-center">
              <p>{this.workshopList()}</p>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-sm-3 text-center">
              <img
                className="image"
                src={require("./photos/Workshop1.jpg")}
                alt="Errornot found"
              ></img>
            </div>
            <div class="col-sm-6 text-center">
              <iframe
                id="calendar"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=ZGVlcHJvb3RzMTZAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%2322AA99&amp;color=%23329262&amp;color=%231F753C&amp;showTitle=0&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div class="col-sm-3 text-center">
              <img
                className="image"
                src={require("./photos/Workshop2.jpg")}
                alt="Error: not found"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
