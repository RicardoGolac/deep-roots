import React, { Component } from "react";
import SurveyPage from "./SurveyPage";

class LifeCoaching extends Component {
    render() {
        return (
            <div>
                <div className="lcinfo">
                <p>Life Coaching Services</p>
                <p>Life coaching can do these things for you: blah blah</p>
                <p>Life coaching rates are typically $1/hr</p>
                <p>Typically limited to 2 months</p>
                </div>
                <div>
                    <SurveyPage />
                </div>
            </div>
          
    
        );
    }
}
  
  export default LifeCoaching;