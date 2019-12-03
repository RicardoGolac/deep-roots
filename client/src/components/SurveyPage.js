import React, { Component } from "react";
import * as Survey from "surveyjs-react";
import "../css/surveypage.css";
import axios from "axios";

//Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
Survey.Survey.cssType = "bootstrap";

/*var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#329400"; //complete button color
defaultThemeColors["$text-color"] = "#4a4a4a"; //text color


Survey
    .StylesManager
    .applyTheme("bootstrap"); //"bootstrap for default"
*/
var myCss = {
  row: "newspacing",

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
      title: "First Name",
      isRequired: true
     },
     {
      type: "text",
      name: "Last Name",
      title: "Last Name",
      isRequired: true
     },
     {
      type: "checkbox",
      name: "Age",
      title: "Age",
      isRequired: true,
      choices: [
       "18-25",
       "26-39",
       "40-59",
       "60+"
      ],
      otherText: "Other (describe)"
     },
     {
      type: "comment",
      name: "Goals",
      title: "What are you looking to achieve by using this coaching service?",
      isRequired: true
     },
     {
      type: "dropdown",
      name: "Creativity",
      title: "Which best describes you?",
      isRequired: true,
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
      name: "Extra Info",
      title: "What information should I know before starting Life Coaching services?",
      isRequired: true
     },
     {
      type: "checkbox",
      name: "Length of Coaching",
      title: "How long do you estimate you will need these services?",
      isRequired: true,
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
      isRequired: true,
      choices: [
       {
        value: "email",
        text: "An email"
       },
       {
        value: "phonecall",
        text: "A phonecall"
       }
      ],
      otherText: "Other (describe)"
     },
     {
      type: "text",
      name: "Email",
      visibleIf: "{Contact Preference} = \"email\"",
      title: "Email address",
      isRequired: true
     },
     {
      type: "text",
      name: "Phone",
      visibleIf: "{Contact Preference} = \"phone\"",
      title: "Phone number",
      isRequired: true
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