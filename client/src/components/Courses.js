import React, { Component } from "react";
import "../css/courses.css";

class Courses extends Component {
    render() {
      return (
        <div className = "courses-container">
            <div className = "row">
                <div className = "col-lg-12 text-center">
                    <h2>Take A Look At Our Course</h2>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
                </div>
                <div className = "col-lg-12 text-center">
                    <a className="btn btn-primary course-button" href="https://www.udemy.com/" role="button"><i className="fas fa-chalkboard-teacher"></i>   To The Course</a>
                </div>
            </div>
        </div>
        
      );
    }
  }
  
  export default Courses;