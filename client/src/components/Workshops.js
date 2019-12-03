import React, { Component } from "react";
import "./../css/Workshops.css";
import axios from "axios";
import { type } from "os";

class Workshops extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: "",
            contents: "",
            workshopsArray: []

        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/workshops/")
            .then(res => {
                const data = res.data;
                this.setState({workshopsArray: data});
                console.log(this.state.workshopsArray);
                console.log(this.state.workshopsArray[1].contents);
            }).catch(err => {
                console.log(err);
            });
        console.log(this.state.workshopsArray);
    }

    workshopList() {
        console.log(this.state.workshopsArray);
        var i = 1;
        var tmp;
        return this.state.workshopsArray.map(workshop => {
            i++;
            if(i%2 == 0)
          {
              if(i == 2 || i == 4 || i == 12 || i == 20)
              {
                return (   
                    <h3><br/>{workshop.contents}</h3>
                );
              }
              else
              {
                  return (
                      <h4>{workshop.contents}</h4>
                  );
              }
          }
          else if(i == 3 || i == 13 || i == 21)
          {
              console.log('hi');
              return(
                  <p>{workshop.contents}</p>
              )
          }
          else if(i > 21)
          {
            return ( 
                <div>  
                    <p>{workshop.contents}</p>
                    <a href="#calendar">Go to Calendar</a>
                    <p><br/></p>
                </div>  
            );
          }
          else
          {
            return ( 
                <div>  
                    <p>{workshop.contents}<br/><br/>
                        One hour workshop organization Offering free or low cost programing: $125.00-$250.00<br/>
                        One day workshops organization Offering free or low cost programing: $500.00<br/>
                        Not including Food, lodging and travel costs
                    </p>
                    <a href="#calendar">Go to Calendar</a>
                    <p><br/></p>
                </div>  
            );
          }
        });
      }

    

    render() {
        return (
            <div class="workshops-container container-fluid text-center">
                <div class="container">
                    <div class="row text-center">
                        <div class="col text-center">
                            <p>{this.workshopList()}</p>
                        </div>
                    </div>
                        <div class="row text-center">
                            <div class="col-sm-3 text-center">
                                <img className="image" src={require("./photos/DlPM9DZVAAAecZm.jpeg")} alt="Errornot found"></img>
                            </div>
                            <div class="col-sm-6 text-center">
                                <iframe id="calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=cmJydG9wbnRqYUBnbWFpbC5jb20&amp;color=%233366CC&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0" frameBorder="0" scrolling="no">
                                </iframe>                    
                            </div>
                            <div class="col-sm-3 text-center">
                                <img className="image" src={require("./photos/DlPLxbtVsAEfyUh.jpeg")} alt="Error: not found"></img>
                            </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Workshops;
