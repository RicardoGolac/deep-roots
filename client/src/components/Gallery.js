import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/gallery.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container
} from "reactstrap";
import axios from "axios";

const Image = props => (
  <div className="image-card-container">
    <Card style={{ width: "25rem" }}>
      <CardImg top src={props.image.link} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.image.name}</CardTitle>
        <CardSubtitle>{props.image.message}</CardSubtitle>
        <CardText>{props.image.description}</CardText>
        <CardText>${props.image.price}</CardText>
        {props.loggedIn && (
          <>
            <Link to={"gallery/update/" + props.image._id}>Edit</Link> |{" "}
            <a
              href="#"
              onClick={() => {
                props.deleteImage(props.image._id);
              }}
            >
              Delete
            </a>
          </>
        )}
      </CardBody>
    </Card>
  </div>
);

class Gallery extends Component {
  constructor(props) {
    super(props);

    // Bind all function listed below like so
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    //this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteImage = this.deleteImage.bind(this);

    this.state = {
      name: "",
      message: "",
      selectedFile: null,
      link: "",
      description: "",
      price: 0,
      images: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/gallery/")
      .then(res => {
        const data = res.data;
        this.setState({ images: data });
        console.log(this.state.images);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.images);
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

  onChangeFile(e) {
    this.setState({
      selectedFile: e.target.files[0]
    });
    console.log(this.state.file);
  }

  /* onChangeLink(e) {
    this.setState({
      link: e.target.value
    });
  } */

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.selectedFile);

    const newLink = await axios
      .post("http://localhost:5000/images/image-upload", formData)
      .then(res => {
        console.log(res.data);

        const data = res.data;
        console.log("Image URL from data is: " + data);
        //console.log("Image URL from data is: " + data);
        this.setState({ link: data });
        // Retrieve S3 link from uploaded file
        // set 'link' to the corresponding file
        const image = {
          name: this.state.name,
          message: this.state.message,
          link: this.state.link,
          description: this.state.description,
          price: this.state.price
        };
        console.log(image);
        axios
          .post("http://localhost:5000/gallery/add", image)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      message: "",
      selectedFile: null,
      link: "",
      description: "",
      price: 0
    });
  };

  deleteImage(id) {
    axios
      .delete("http://localhost:5000/gallery/" + id)
      .then(res => console.log(res.data));

    this.setState({
      images: this.state.images.filter(el => el._id !== id)
    });
  }

  imageList() {
    return this.state.images.map(currentImage => {
      return (
        <Image
          image={currentImage}
          deleteImage={this.deleteImage}
          key={currentImage._id}
          loggedIn={this.props.loggedIn}
        />
      );
    });
  }

  render() {
    return (
      <div id="gallery-view-container">
        <div id="gallery-container">
          {/* This section is only visible when the admin is logged in */}
          {this.props.loggedIn && (
            <>
              <div className="form-container">
                <h3>Admin Powers Enabled</h3>
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
                    />
                  </div>
                  {/* <div className="form-group">
              <label>Link: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.link}
                onChange={this.onChangeLink}
              />
            </div> */}
                  <div className="form-group">
                    <label>Description: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price: </label>
                    <input
                      type="number"
                      min="0"
                      required
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChangePrice}
                    />
                  </div>
                  <div
                    class="image-upload-container btn btn-bwn"
                    className="form-group"
                  >
                    <label>File: </label>
                    <input
                      type="file"
                      required
                      className="form-control"
                      value={this.state.file}
                      onChange={this.onChangeFile}
                      accept="image/*"
                    />
                  </div>
                  {/* <div class="img-preview" style={{'background-image: '}}></div> */}
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create Gallery Item"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </>
          )}
          <div class="centered">
            <section className="cards">
              <section class="container-fluid">{this.imageList()}</section>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
