import React, { Component } from "react";
import LCCard from "./LCCard";
import LCInfo from "./LCInfo";
import SurveyPage from "./SurveyPage";
import "../css/lifecoaching.css";
import axios from "axios";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  //TODO:
  //make logged in the state/prop from app.js for final
  //states need to get data from database when constructed
  //edit functions need to edit data in database 

class LifeCoaching extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            value: '',
            displaySurveyForm: false,
            loggedIn: true, //not a state, a prop
            infoText: 'Creative life coaching is a personalized service to help you evolve yourself and your creative mind. These services last for up to two months. They are personalized to you and your needs.',
            benefits: 'Our Ancestors teach us that the beauty of life is working in tandem with the grand plan of creation. The courage of an Artist is being able to capture these aspects in their work to retain that, which is meaningful to us as human beings. To stay to one’s purpose and calling can be the most challenging task and the richest reward. Creative life coaching can help you do just that.',
            rates: 'Life coaching is paid on a per miniute basis. The current rate is 1 dollar per minute.',
            howTo: 'If you are interested, please fill out the survey by clicking on the button below. Turbado will respond via email as soon as possible.'
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      editText = () => {
        this.setState({
            infoText: 'henlo'
        })
    } //fix this obvs
    editRates = () => {
        this.setState({
            rates: 'henlo'
        })
    } //fix this obvs
    editBenefits = () => {
        this.setState({
            benefits: 'henlo'
        })
    } //fix this obvs
    editHowTo = () => {
        this.setState({
            howTo: 'henlo'
        })
    } //fix this obvs
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
                alert("Question submitted."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Question failed to submit.")
            }
        })
      }
      displaySurveyForm = () => {
        this.setState({
            displaySurvey: !this.state.displaySurvey
        })
    }
    render() {
        if (!this.state.loggedIn) { //not a state,a prop
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
                        <div class="col-sm-6"><LCInfo loggedIn={this.state.loggedIn}
                        benefits={this.state.benefits}
                        rates={this.state.rates}
                        howTo={this.state.howTo}
                        editBenefits={this.editBenefits.bind(this)}
                        editRates={this.editRates.bind(this)}
                        editHowTo={this.editHowTo.bind(this)}
                        ></LCInfo></div>
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
                        <div class="col-sm-6"><LCInfo loggedIn={this.state.loggedIn}
                        benefits={this.state.benefits}
                        rates={this.state.rates}
                        howTo={this.state.howTo}
                        editBenefits={this.editBenefits.bind(this)}
                        editRates={this.editRates.bind(this)}
                        editHowTo={this.editHowTo.bind(this)}
                        ></LCInfo></div>
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
    else {
        if (this.state.displaySurvey) {
            return (
                <div className="lcview">
                    <div>
                    <p className="lctitle">Creative Life Coaching</p>
                    <p className="lcsubtitle">Taking the Journey Together</p>
                    </div>
                    <div className="lcinfo">
                    <div class="row">
                            <div class="col-sm-6">
                            <Card>
                                <CardImg top width="100%" src={require("./photos/clc.jpg")} alt="clc image" />
                                <CardBody>
                                <CardText>{this.state.infoText}</CardText>
                                <Button onClick={this.editText} >Edit</Button>
                                </CardBody>
                            </Card>
                            </div>
                            <div class="col-sm-6"><LCInfo loggedIn={this.state.loggedIn}
                            benefits={this.state.benefits}
                            rates={this.state.rates}
                            howTo={this.state.howTo}
                            editBenefits={this.editBenefits.bind(this)}
                            editRates={this.editRates.bind(this)}
                            editHowTo={this.editHowTo.bind(this)}
                            ></LCInfo></div>
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
                            <div class="col-sm-6">
                            <Card>
                                <CardImg top width="100%" src={require("./photos/clc.jpg")} alt="clc image" />
                                <CardBody>
                                <CardText>{this.state.infoText}</CardText>
                                <Button onClick={this.editText} >Edit</Button>
                                </CardBody>
                            </Card>
                            </div>
                            <div class="col-sm-6"><LCInfo  loggedIn={this.state.loggedIn}
                            benefits={this.state.benefits}
                            rates={this.state.rates}
                            howTo={this.state.howTo}
                            editBenefits={this.editBenefits.bind(this)}
                            editRates={this.editRates.bind(this)}
                            editHowTo={this.editHowTo.bind(this)}
                            ></LCInfo></div>
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
}
  
  export default LifeCoaching;