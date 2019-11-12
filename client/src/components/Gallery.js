import React, { Component } from "react";
import "../css/gallery.css";

let viewImage = (imageSrc) => {
    return (
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-8">
                    <img src={imageSrc} class="card-img" />
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">Title of Art</h5>
                        <p class="card-text">This is where a description of the piece will be (medium, analysis, etc.)</p>
                        <p class="card-text"><small class="text-muted">TODO: Date</small></p>
                    </div>
                </div>
            </div>
        </div>
    )



}

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [
                "https://thedoris.files.wordpress.com/2011/11/1-dsc01528-2-small.jpg?w=1400"
                , "https://cdn-az.allevents.in/banners/e72dc5d6aef11c31d6aaeb2b3ae950d5-rimg-w720-h540-gmir.jpg"
                , "https://thedoris.files.wordpress.com/2011/11/zulu-chief.jpg"
            ]
        }
    }
    render() {
        return (
            <div id="gallery-container">
                {this.state.pictures.map(function (picture) {
                    return viewImage(picture);
                })}
            </div>
        )
    }
}

export default Gallery;
