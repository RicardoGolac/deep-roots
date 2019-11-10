import React, { Component } from "react";
import './photos/Blaac2Basics.PNG'

// 

class Associations extends Component {
  render() {
    return (
      <div>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '1vh'}}>
          <h3>Deeproots Associates</h3>
        </div>
        <table style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <div className = "photos">
            <tr>
              <td><ui><img src = {require("./photos/Blaac2Basics.PNG")}/></ui></td>
              <td><ul>Blaac2Basics</ul></td>
              <td><ul><a href="#">Click here for more information about Blaac2Basics</a></ul></td>
            </tr>
          
            <tr>
              <td><ui><img src = {require("./photos/Placeholder.png")}/></ui></td>
              <td><ul>Scoot'n Doodle</ul></td>
              <td><ul><a href="#">Click here for more information about Scoot'n Doodle</a></ul></td>
            </tr>

            <tr>
              <td><ui><img src = {require("./photos/Placeholder.png")}/></ui></td>
              <td><ul>Queen's Room</ul></td>
              <td><ul><a href="#">Click here for more information about Queen's Room</a></ul></td>
            </tr>
          </div>
        </table>
      </div>
    );
  }
}

export default Associations;
