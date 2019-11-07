import React, { Component } from "react";
import "./pageContents.css";
class pageContents extends Component {
    render() {
        return (
            <div class="container-fluid text-center" style={{height: '100vh', width: '100%'}}>
                <div class="row text-center" style={{height: '50%'}}>
                    <div id="test" class="col-sm-6 text-center">
                    Here we will have some text talking about the workshops
                    </div>
                    <div class="col-sm-6 text-center">
                    Here we will have an embed with square to pay for workshops
                    </div>
                </div>
                <div class="row text-center" style={{height: '50%'}}>
                    <div class="col-sm-3 text-center" style={{height: '100%'}}>
                        <img src={require("./Images/DlPM9DZVAAAecZm.jpeg")} alt="Errornot found" style={{height: '100%', width: '100%', padding: '5%'}}></img>
                    </div>
                    <div class="col-sm-6 text-center" style={{height: '100%'}}>
                        <iframe id="calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=cmJydG9wbnRqYUBnbWFpbC5jb20&amp;color=%233366CC&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0" frameborder="0" scrolling="no">
                        </iframe>                    
                     </div>
                    <div class="col-sm-3 text-center" style={{height: '100%'}}>
                        <img src={require("./Images/DlPLxbtVsAEfyUh.jpeg")} alt="Error: not found" style={{height: '100%', width: '100%', padding: '5%'}}></img>
                    </div>
                </div>
            </div>
        );
    }

}

export default pageContents;