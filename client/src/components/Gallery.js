import React, { Component } from "react";
import "../css/gallery.css";
import axios from "axios";

class ViewImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            title: props.image.title,
            url: props.image.imageLink,
            price: props.image.price,
        }
    }
    
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        axios.post("/gallery/" + this.props.image._id, this.state).then(response => {
        });
    }

    toggleEdit = () => {
        this.setState({
            editing: true
        })
    }

    deletePhoto = () => {
        axios.delete("/gallery/" + this.props.image._id).then(response => {
            window.location.reload();
        }).catch(err => {
            window.location.reload();
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <img src={this.props.image.imageLink} className="card-img" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.image.title}</h5>
                                <p className="card-text">${this.props.image.price}</p>
                                <button className="btn btn-primary btn-xs" onClick={this.toggleEdit}>edit</button>
                                <button className="btn btn-primary btn-xs" onClick={this.deletePhoto}>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <form
                    onSubmit={e => this.onSubmit(e)}
                    className="login-form-container"
                >
                    <div className="login-input-container">
                        <label htmlFor="title"></label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title of art"
                            required
                            value={this.state.title}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="login-input-container">
                        <label htmlFor="image url"></label>
                        <input
                            type="text"
                            name="imageLink"
                            placeholder="Enter link to image"
                            required
                            className="login-input"
                            value={this.state.url}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="login-input-container">
                        <label htmlFor="price"></label>
                        <input
                            type="text"
                            name="price"
                            placeholder="Enter price"
                            required
                            className="login-input"
                            value={this.state.price}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="login-input-container">
                        <input type="submit" value="update art" className="login-button" />

                    </div>
                </form>
            );
        }
    }
}

class CreateImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: "",
            title: "",
            imageLink: "",
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        axios.post("/gallery/", this.state).then(response => {
        });
    }

    render() {
        return (
            <form
                onSubmit={e => this.onSubmit(e)}
                className="login-form-container"
            >
                <div className="login-input-container">
                    <label htmlFor="title"></label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title of art"
                        required
                        value={this.state.title}
                        onChange={e => this.onChange(e)}
                    />
                </div>
                <div className="login-input-container">
                    <label htmlFor="image url"></label>
                    <input
                        type="text"
                        name="imageLink"
                        placeholder="Enter link to image"
                        required
                        className="login-input"
                        value={this.state.imageLink}
                        onChange={e => this.onChange(e)}
                    />
                </div>
                <div className="login-input-container">
                    <label htmlFor="price"></label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Enter price"
                        required
                        className="login-input"
                        value={this.state.price}
                        onChange={e => this.onChange(e)}
                    />
                </div>
                <div className="login-input-container">
                    <input type="submit" value="add art" className="login-button" />
                </div>
            </form>
        )
    }
}

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [
                ]
        }
    }

    componentDidMount() {
        axios.get('/gallery/')
            .then(res => {
                if (res.data) {
                    this.setState({
                        pictures: res.data
                    });
                }
            });

    }

    render() {
        return (
            <div>
                <CreateImage />
                <div id="gallery-container">
                    {this.state.pictures.map(function (picture) {
                        return <ViewImage image={picture} key={picture.imageUrl} />
                    })}
                </div>
            </div>

        )
    }
}

export default Gallery;
