import React, { Component } from "react";
import SurveyPage from "./SurveyPage";
import "../css/lifecoaching.css";

class LifeCoaching extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A question was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <div>
                <div>
                <p className="lctitle">Creative Life Coaching</p>
                <p className="lcsubtitle">Taking the Journey Together</p>
                </div>
                <div className="lcinfo">
                <p>Life coaching about section</p>
                <p>Life coaching rates section</p>
                <p>Typically limited to 2 months</p>
                </div>
                <div className="question">
                    <p>Have a question?</p>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                     Ask Here:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                </div>
                <div>
                    <SurveyPage />
                </div>
            </div>
          
    
        );
    }
}
  
  export default LifeCoaching;