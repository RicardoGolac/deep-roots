import React, { Component } from "react";
import "./../css/Workshops.css";
import axios from "axios";

class EditWorkshops extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeST = this.onChangeST.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContents = this.onChangeContents.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    //this.deleteWorkshop=this.deleteWorkshop.bind(this);
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
      .get("http://localhost:5000/workshops/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          sectionTitle: res.data.sectionTitle,
          title: res.data.title,
          contents: res.data.contents,
          price: res.data.price
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/workshops/")
      .then(res => {
        const data = res.data;
        this.setState({ workshopsArray: data });
        console.log(this.state.workshopsArray);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.workshopsArray);
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
    console.log(workshop);
    axios
      .post(
        "http://localhost:5000/workshops/update/" + this.props.match.params.id,
        workshop
      )
      .then(res => console.log(res.data));

    // Clear the inputs
    this.setState({
      sectionTitle: "",
      title: "",
      contents: "",
      price: ""
    });
  }

  render() {
    return (
      <div class="workshops-container container-fluid text-center">
        <div class="container">
          <div>
            <h3>Admin Privleges Enabled!</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Section Title: </label>
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.sectionTitle}
                  onChange={this.onChangeST}
                />
              </div>
              <div className="form-group">
                <label>Title: </label>
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label>Contents: </label>
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.contents}
                  onChange={this.onChangeContents}
                />
              </div>
              <div className="form-group">
                <label>Price: </label>
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.price}
                  onChange={this.onChangePrice}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Update Workshop"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditWorkshops;
