import React, { Component } from "react";
import "../css/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-view-container">
        <div className="home-container">
          <div className="home-title">
            <h1>Deeproots</h1>
          </div>
          <h4>Art is for Life’s Sake</h4>
          <img
            src={require("./photos/Turbado-the-artist.jpg")}
            alt="Turbado Marabou"
            width="300"
            height="300"
          ></img>
          <div className="home-about">
            TURBADO THE ARTIST: Art is for Life’s Sake Traditional Healer,
            Storyteller, Folklorist, Visual Artist and Oral Historian Turbado is
            a folklorist who focuses on African Trans-Atlantic culture and
            history through his stories and visual art. Turbado uses his talents
            as a visual and performing artist to entertain and educate. Through
            his storytelling, workshops and classes, Turbado creates an
            atmosphere of empowerment and personal development while spinning
            tales that encourage good character and brings people together in
            the spirit of the human family.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
