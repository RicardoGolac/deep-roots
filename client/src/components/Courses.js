import React, { Component } from "react";
import "../css/courses.css";
import {
  Row,
  Col
} from "reactstrap";
class Courses extends Component {
    render() {
      return (
        <div className = "courses-container text-center">
            <Row className = "text-center">
                
                <Col className = "iframe-container text-center" sm = "12">
                    <h2 >Take A Look At Our Course</h2>
                    <iframe title="Campus Tour" id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
                </Col>
                <Col sm = "12">
                    <a className="btn btn-primary course-button" href="https://www.udemy.com/" role="button"><i className="fas fa-chalkboard-teacher"></i>   To The Course</a>
                </Col>
            </Row>
        </div>
        
      );
    }
  }
  
  export default Courses;