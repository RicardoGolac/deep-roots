import React, { Component } from "react";
import "./../css/Workshops.css";
import axios from "axios";
import { type } from "os";
import { Button} from 'reactstrap';
import { Link } from "react-router-dom"

const WorkshopItem = props => (
    <div>
        <h3>{props.workshop.title}</h3>
        <p> {props.workshop.contents} </p>
        {props.loggedIn && (
            <>
                <Link to={"/workshop/update/" + props.workshop._id}>edit</Link> |{" "}
                <a
                href="#"
                onClick={() => {
                    props.deleteWorkshop(props.workshop._id);
                }}
                >
                delete
                </a>
            </>
        )}
    </div>
);

class Workshops extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: "",
            title: "",
            contents: "",
            workshopsArray: []

        };
    }

    componentWillMount() {
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
    editText() {
        console.log("edit")
    }
    deleteWorkshop() {
        console.log("delete")
    }
    workshopList() {
        console.log(this.state.workshopsArray);
        return this.state.workshopsArray.map(curWorkshop => {
            return (
                <WorkshopItem 
                workshop={curWorkshop}
                deleteWorkshop={this.deleteWorkshop}
                key={curWorkshop._id}
                loggedIn={this.props.loggedIn}
            />
            ) 
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
