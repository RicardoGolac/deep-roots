//In your react App.js or yourComponent.js file add these lines to import
import React, { Component } from "react";
import * as Survey from "surveyjs-react";
import "../css/surveypage.css";

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#329400"; //complete button
defaultThemeColors["$main-hover-color"] = "#6fe06f";
defaultThemeColors["$text-color"] = "#4a4a4a";

defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey
    .StylesManager
    .applyTheme(); //"bootstrap for default"

var myCss = {
  row: "newspacing",
  navigationButton: "button btn-lg",
};


//state that reads from database
//make button to change data in listing and update it
//make routes
class SurveyPage extends Component {
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

 //Define a callback methods on survey complete
 onComplete(survey, options) {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }
 
 render() {
  //Create the model and pass it into react Survey component
  //You may create survey model outside the render function and use it in your App or component
  //The most model properties are reactive, on their change the component will change UI when needed.
  var model = new Survey.Model(this.json);
  //return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
  /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
  //You may pass model properties directly into component or set it into model
  // <Survey.Survey model={model} mode="display"/>
  //or 
  // model.mode="display"
  // <Survey.Survey model={model}/>
  // You may change model properties outside render function. 
  //If needed react Survey Component will change its behavior and change UI.
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