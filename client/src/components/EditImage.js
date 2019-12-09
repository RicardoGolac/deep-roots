import React, { Component } from "react";
import axios from "axios";
import "../css/gallery.css";

class EditImage extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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
    // GET image by id
    axios
      .get("/gallery/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          message: res.data.message,
          link: res.data.link,
          description: res.data.description,
          price: res.data.price
        });
      })
      .catch(function(err) {
        console.log(err);
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

  onChangeFile(e) {
    this.setState({
      selectedFile: e.target.files[0]
    });
    //console.log(this.state.file);
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    });
  }

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
      .post("/images/image-upload", formData)
      .then(res => {
        console.log(res.data);

        const data = res.data;
        console.log("Image URL from data is: " + data);
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
          .post("/gallery/update/" + this.props.match.params.id, image)
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

  render() {
    return (
      <div className="gallery-view-container">
        <div className="gallery-edit-container">
          <h3>Edit Image</h3>
          <div className="form-container">
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
              <div className="form-group">
                <input
                  type="submit"
                  value="Update Image Item"
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

export default EditImage;
