import React, { Component } from "react";
import * as Survey from "surveyjs-react";
import "../css/surveypage.css";
import axios from "axios";

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#329400"; //complete button color
defaultThemeColors["$text-color"] = "#4a4a4a"; //text color


Survey
    .StylesManager
    .applyTheme(); //"bootstrap for default"

var myCss = {
  row: "newspacing",
  navigationButton: "button btn-lg",
};


class SurveyPage extends Component {
  constructor(props) {

    super(props);

    this.onComplete = this.onComplete.bind(this);

    //Setting the default state
    this.state = {
      message: ""
    };
  }

 //Define Survey JSON
 json = {
  title: "Life Coaching Survey",
    pages: [
     {
      name: "LC Page",
      elements: [
       {
        type: "text",
        name: "First Name",
        title: "First Name"
       },
       {
        type: "text",
        name: "Last Name",
        title: "Last Name"
       },
       {
        type: "checkbox",
        name: "Age",
        title: "Age",
        choices: [
         {
          value: "18-25",
          text: "18-25"
         },
         {
          value: "25-39",
          text: "25-39"
         },
         {
          value: "40-59",
          text: "40-59"
         },
         {
          value: "60+",
          text: "60+"
         }
        ],
       },
       {
        type: "comment",
        name: "Goals",
        title: "What are you looking to achieve by using this coaching service?"
       },
       {
        type: "dropdown",
        name: "Creativity Level",
        title: "Which best describes you?",
        choices: [
         {
          value: "Very in touch with my creativity",
          text: "Very in touch with my creativity"
         },
         {
          value: "Somewhat in touch with my creativity",
          text: "Somewhat in touch with my creativity"
         },
         {
          value: "Not at all in touch with my creativity",
          text: "Not at all in touch with my creativity"
         }
        ]
       },
       {
        type: "comment",
        name: "Need to Know",
        title: "What information should I know before starting Life Coaching services?"
       },
       {
        type: "checkbox",
        name: "How Long",
        title: "How long do you estimate you will need these services?",
        choices: [
         {
          value: "2 weeks",
          text: "2 weeks"
         },
         {
          value: "about 1 month",
          text: "about 1 month"
         },
         {
          value: "6-8 weeks",
          text: "6-8 weeks"
         }
        ]
       },
       {
        type: "dropdown",
        name: "Contact Preference",
        title: "How should I get back to you?",
        choices: [
         {
          value: "An email",
          text: "An email"
         },
         {
          value: "A phonecall",
          text: "A phonecall"
         },
         {
          value: "No preference",
          text: "No preference"
         }
        ],
       }
      ]
     }
    ]
   };

 //callback method on survey complete
 onComplete(survey) {
  //log results and post request to route to mailer
  console.log("Survey results: " + JSON.stringify(survey.data));

  axios({
    method: "POST", 
    url:"http://localhost:3000/send/complete", 
    data: {
        messsage: survey.data
    }
}).then((response)=>{
    if (response.data.msg === 'success'){
        alert("Message Sent."); 
    }else if(response.data.msg === 'fail'){
        alert("Message failed to send.")
    }
})

 }
 
 render() {
  //make survey model to be rendered
  var model = new Survey.Model(this.json);

  return (
    <div className="Survey">
      <div className="SurveyHeader">
        <h2>Life Coaching Survey</h2>
      </div>
      <div className="surveyjs">
        <Survey.Survey
          model={model}
          css={myCss}
          onComplete={this.onComplete.bind(this)}
          
        />

      </div>
    </div>
  );
 }
} 
export default SurveyPage;