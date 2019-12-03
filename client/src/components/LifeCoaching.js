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
            infoText: [], 
            rates: [],
            howTo: [],
            benefits: [],
            newText: '',
            newRates: '',
            newBen: '',
            newHowTo: '',
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      updateText = (value) => {
          console.log(value);
          this.setState({
              newText: value
          })
      }
      updateRates = (value) => {
        this.setState({
            newRates: value
        })
    }
    updateBen = (value) => {
        this.setState({
            newBen: value
        })
    }
    updateHowTo = (value) => {
        this.setState({
            newHowTo: value
        })
    }
      editText = () => {
        const newt = {
            id : 0,
            text: this.state.newText
        };
        axios
        .post("http://localhost:5000/editLC/edit/0", newt)
        .then(response => {
            console.log(newt);
        })
        .catch(error => {
            console.log(error);
        });
    } 
    editRates = (e) => {
        e.preventDefault();
        const newt = {
            id : 1,
            text: this.state.newRates
        };
        axios
        .post("http://localhost:5000/editLC/edit/1", newt)
        .then(response => {
            console.log(newt);
        })
        .catch(error => {
            console.log(error);
        });
    } 
    editBenefits = (e) => {
        e.preventDefault();
        const newt = {
            id : 2,
            text: this.state.newBen
        };
        axios
        .post("http://localhost:5000/editLC/edit/2", newt)
        .then(response => {
            console.log(newt);
        })
        .catch(error => {
            console.log(error);
        });
    } 
    editHowTo = (e) => {
        e.preventDefault();
        const newt = {
            id : 3,
            text: this.state.newHowTo
        };
        axios
        .post("http://localhost:5000/editLC/edit/3", newt)
        .then(response => {
            console.log(newt);
        })
        .catch(error => {
            console.log(error);
        });
    }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      
      resetForm(){
        document.getElementById('contact-form').reset();
    }
    componentDidMount() {
        axios
        .get("http://localhost:5000/editLC/display/0")
        .then(response => {
            const data = response.data;
            var txt = JSON.stringify(data.text);
            this.setState({infoText : txt})
            console.log(txt);
        })
        .catch(error => {
            console.log(error);
        });
        axios
        .get("http://localhost:5000/editLC/display/1")
        .then(response => {
            const data = response.data;
            var txt = JSON.stringify(data.text);
            this.setState({rates : txt})
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
        axios
        .get("http://localhost:5000/editLC/display/2")
        .then(response => {
            const data = response.data;
            var txt = JSON.stringify(data.text);
            this.setState({benefits : txt})
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
        axios
        .get("http://localhost:5000/editLC/display/3")
        .then(response => {
            const data = response.data;
            var txt = JSON.stringify(data.text);
            this.setState({howTo : txt})
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
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
        if (!this.props.loggedIn) { //not a state,a prop
        if (this.state.displaySurvey) {
        return (
            <div className="lcview">
                <div>
                <p className="lctitle">Creative Life Coaching</p>
                <p className="lcsubtitle">Taking the Journey Together</p>
                </div>
                <div className="lcinfo">
                <div class="row">
                        <div class="col-sm-6"><LCCard
                        loggedIn={this.props.loggedIn}
                        infoText={this.state.infoText}
                        editText={this.editText.bind(this)}
                        updateText={this.updateText.bind(this)}
                        ></LCCard></div>
                        <div class="col-sm-6"><LCInfo
                        benefits={this.state.benefits}
                        rates={this.state.rates}
                        howTo={this.state.howTo}
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
                        <div class="col-sm-6"><LCCard
                        loggedIn={this.props.loggedIn}
                        infoText={this.state.infoText}
                        editText={this.editText.bind(this)}
                        updateText={this.updateText.bind(this)}
                        ></LCCard></div>
                        <div class="col-sm-6"><LCInfo
                        benefits={this.state.benefits}
                        rates={this.state.rates}
                        howTo={this.state.howTo}
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
                            <LCCard
                            loggedIn={this.props.loggedIn}
                            infoText={this.state.infoText}
                            editText={this.editText.bind(this)}
                            updateText={this.updateText.bind(this)}
                            ></LCCard>
                            </div>
                            <div class="col-sm-6"><LCInfo loggedIn={this.props.loggedIn}
                            benefits={this.state.benefits}
                            rates={this.state.rates}
                            howTo={this.state.howTo}
                            editBenefits={this.editBenefits.bind(this)}
                            editRates={this.editRates.bind(this)}
                            editHowTo={this.editHowTo.bind(this)}
                            updateRates={this.updateRates.bind(this)}
                            updateBen={this.updateBen.bind(this)}
                            updateHowTo={this.updateHowTo.bind(this)}
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
                            <LCCard
                            loggedIn={this.props.loggedIn}
                            infoText={this.state.infoText}
                            editText={this.editText.bind(this)}
                            updateText={this.updateText.bind(this)}
                            ></LCCard>
                            </div>
                            <div class="col-sm-6"><LCInfo  loggedIn={this.props.loggedIn}
                            benefits={this.state.benefits}
                            rates={this.state.rates}
                            howTo={this.state.howTo}
                            editBenefits={this.editBenefits.bind(this)}
                            editRates={this.editRates.bind(this)}
                            editHowTo={this.editHowTo.bind(this)}
                            updateRates={this.updateRates.bind(this)}
                            updateBen={this.updateBen.bind(this)}
                            updateHowTo={this.updateHowTo.bind(this)}
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