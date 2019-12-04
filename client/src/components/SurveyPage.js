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
        name: "Name or Initials",
        title: "Name or Initials",
        isRequired: true
       },
       {
        type: "text",
        name: "DOB",
        title: "DOB",
        isRequired: true,
        placeHolder: "mm/dd/yyyy"
       },
       {
        type: "checkbox",
        name: "Relationship Status",
        title: "Relationship Status",
        isRequired: true,
        choices: [
         "Married",
         "Single",
         "Divorced",
         "Widowed"
        ],
        otherText: "Other (describe)"
       },
       {
        type: "checkbox",
        name: "L/R Handed",
        title: "Left-handed or right-handed?",
        isRequired: true,
        choices: [
         "Left",
         "Right"
        ]
       },
       {
        type: "comment",
        name: "Impairments",
        title: "Any physical impairments or injuries dealing with range of motion? Explain below.",
        isRequired: true
       },
       {
        type: "comment",
        name: "Vision",
        title: "Vision problems? Explain below.",
        isRequired: true
       },
       {
        type: "comment",
        name: "Mental Impairments",
        title: "Any mental impairments such as autism, schizophrenia, PTSD, etc.? Explain below.",
        isRequired: true
       },
       {
        type: "comment",
        name: "Reason",
        title: "Why do you feel you need a creative life coach? Describe what is going on.",
        isRequired: true
       },
       {
        type: "comment",
        name: "Goals",
        title: "Do you have any specific goals you wish addressed during these sessions?",
        isRequired: true
       },
       {
        type: "comment",
        name: "When did you realize",
        title: "When did you begin to realize there was a problem with your creative process?",
        isRequired: true
       },
       {
        type: "comment",
        name: "Trauma",
        title: "Can you recall any trauma that occurred prior to your awareness?",
        isRequired: true
       },
       {
        type: "comment",
        name: "Changes",
        title: "Any change of lifestyle or time management?",
        isRequired: true
       },
       {
        type: "comment",
        name: "Creative time",
        title: "How many times a week do you allot for creative time?",
        isRequired: true
       },
       {
        type: "comment",
        name: "How long",
        title: "How long? 30 minutes, 1 hour, etc.",
        isRequired: true
       },
       {
        type: "comment",
        name: "Work space",
        title: "Do you have a designated work space?",
        isRequired: true
       },
       {
        type: "comment",
        name: "Shared work space",
        title: "Do you share that work space?",
        isRequired: true
       },
       {
        type: "checkbox",
        name: "Preferred Medium",
        title: "What is your medium of choice? Check all that apply.",
        isRequired: true,
        choices: [
         "Painting",
         "Drawing",
         "Printmaking",
         "Clay",
         "Other"
        ]
       },
       {
        type: "checkbox",
        name: "Business owner",
        title: "Are you a business owner?",
        isRequired: true,
        choices: [
         "Yes",
         "No"
        ]
       },
       {
        type: "checkbox",
        name: "Employee",
        title: "Employee?",
        isRequired: true,
        choices: [
         "Yes",
         "No"
        ]
       },
       {
        type: "comment",
        name: "Working hours",
        title: "How many hours a week do you work?",
        isRequired: true
       },
       {
        type: "comment",
        name: "Sleep hours",
        title: "How many hours a night do you sleep?",
        isRequired: true
       },
       {
        type: "checkbox",
        name: "Remember your dreams",
        title: "Do you remember your dreams?",
        isRequired: true,
        choices: [
         "Yes",
         "No"
        ]
       },
       {
        type: "checkbox",
        name: "Dreams in color",
        title: "Are they in color?",
        isRequired: true,
        choices: [
         "Yes",
         "No"
        ]
       },
       {
        type: "checkbox",
        name: "Journal",
        title: "Do you journal?",
        isRequired: true,
        choices: [
         "Yes",
         "No"
        ]
       },
       {
        type: "comment",
        name: "Social activity hours",
        title: "How many hours a week do you allot for social activity?",
        isRequired: true
       },
       {
        type: "checkbox",
        name: "Meditate",
        title: "Do you meditate?",
        isRequired: true,
        choices: [
         "Yes",
         "No"
        ]
       },
       {
        type: "checkbox",
        name: "Yoga",
        title: "Do you or have you done yoga?",
        isRequired: true,
        choices: [
         "Yes",
         "No"
        ]
       },
       {
        type: "comment",
        name: "Personality",
        title: "Describe your personality in five words.",
        isRequired: true
       },
       {
        type: "checkbox",
        name: "Art goals",
        title: "What are your personal goals regarding your art? Check one or describe in greater detail.",
        isRequired: true,
        choices: [
         "Just a hobby",
         "Kinda serious, I exhibit from time to time",
         "Striving to be a professional artist part time",
         "Fulltime ",
         "Describe in greater detail"
        ]
       },
       {
        type: "comment",
        name: "Greater detail",
        visibleIf: "{Art goals} = [\"Describe in greater detail\"]",
        title: "Describe in greater detail here.",
        isRequired: true
       },
       {
        type: "comment",
        name: "Favorite visual artists",
        title: "Name three of your favorite visual artists.",
        isRequired: true
       },
       {
        type: "comment",
        name: "Describe how you would like to be creatively",
        title: "Describe how you would like to be creatively.",
        isRequired: true
       },
       {
        type: "dropdown",
        name: "What kind of artist",
        title: "What kind of artist do you think you are?\n\nSocial spirit: Getting energy and direction from the group. What they do you go along with. The collective admirer, supporter, inclusive.\n\nStoryteller weaver: Where people gather around you for creating the atmosphere for others but you're guarded about your process. The enigma, organizer, administrator, teacher, self-gratifying.\n\nGhost: People only have proof of your talent through eye witness accounts and photographic blurs. Even if they see your work they are not sure you did it but they believe. Closet artist, introvert, shy, afraid of... what.",
        isRequired: true,
        choices: [
         "Social spirit",
         "Storyteller weaver",
         "Ghost"
        ]
       },
       {
        type: "text",
        name: "Email",
        title: "Email address",
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
        alert("Survey submitted."); 
    }else if(response.data.msg === 'fail'){
        alert("Survey failed to submit.")
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