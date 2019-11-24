import React, { Component } from "react";
import LCCard from "./LCCard";
import LCInfo from "./LCInfo";
import SurveyPage from "./SurveyPage";
import "../css/lifecoaching.css";
import axios from "axios";

class LifeCoaching extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            value: '',
            displaySurveyForm: false
        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      
      resetForm(){
        document.getElementById('contact-form').reset();
    }

      handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3000/send/question", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
      }
      displaySurveyForm = () => {
        this.setState({
            displaySurvey: !this.state.displaySurvey
        })
    }
    render() {
        if (this.state.displaySurvey) {
        return (
            <div className="lcview">
                <div>
                <p className="lctitle">Creative Life Coaching</p>
                <p className="lcsubtitle">Taking the Journey Together</p>
                </div>
                <div className="lcinfo">
                <div class="row">
                        <div class="col-sm-6"><LCCard></LCCard></div>
                        <div class="col-sm-6"><LCInfo></LCInfo></div>
                    </div>
                </div>
                <div className="button">
                <button className="lcbtn" onClick={this.displaySurveyForm}>
                Click to ask a question
                </button>
                </div>
                <div>
                    <SurveyPage />
                </div>
            </div>
        );
        }
        else {
            return (
                <div className="lcview">
                    <div>
                    <p className="lctitle">Creative Life Coaching</p>
                    <p className="lcsubtitle">Taking the Journey Together</p>
                    </div>
                    <div className="lcinfo">
                    
                    <div class="row">
                        <div class="col-sm-6"><LCCard></LCCard></div>
                        <div class="col-sm-6"><LCInfo></LCInfo></div>
                    </div>
                    <div className="button">
                    <button className="lcbtn" onClick={this.displaySurveyForm}>
                    Click to fill out survey!
                    </button>
                    </div>
                    </div>
                    <div className="question">
                        <p>Have a question? Ask here.</p>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="message">Question</label>
                            <textarea className="form-control" rows="5" id="message"></textarea>
                        </div>
                        <div className="button">
                        <button className="lcbtn" type="submit">Submit</button>
                        </div>
                        
                    </form>
                    </div>
     
                </div>
              
        
            );
        }
    }
}
  
  export default LifeCoaching;