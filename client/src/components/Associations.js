import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Associations extends Component {

  state = {
    associations: [
      { id: uuid(), pic: require("./photos/Blaac2Basics.PNG"),name: "Blaac2Basics", link:"https://www.facebook.com/BLAAC2BASICS" },
      { id: uuid(), pic: require("./photos/Placeholder.png"),name: "Scoot'n Doodle", link:"" },
      { id: uuid(), pic: require("./photos/Queensroom.PNG"),name: "Queen's Room", link:"https://queensroom.org" },
    ],
  }

  render() {
    const { associations } = this.state;

    console.log(associations);

    return (

      <div className = "association-container">
        <h3 style ={{display: 'flex', justifyContent:'center', alignItems:'center', height: '10vh'}}>
          Deeproots Associations
        </h3>
        <button
            className = "add-btn"
            color = "dark"
            style = {{justifyContent:'right', alignItems: 'right'}}
            onClick = {()=> {
              const name = prompt('Enter the Name');
              const link = prompt('Enter the link');
              const pic = require("./photos/Placeholder.png");
              if (name && link) {
                this.setState(state => ({
                  associations: [...state.associations, {id: uuid, pic, name, link}]
                }));
              }
            }}>Add Associate</button>
        <ListGroup style={{display: 'flex', alignItems:'center', height: '60rem'}}>
          <TransitionGroup className="Associations">
            {associations.map(( {id, pic, name, link}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem className = "association-table-container">
                  <tr>
                    <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                        this.setState(state => ({
                          associations: state.associations.filter(associations => associations.id !== id)
                        }));
                    }}>
                      &times;</Button>

                    <Button
                    className="edit-btn"
                    color="success"
                    size="sm"
                    onClick={() => {
                      const name = prompt('Enter the Name');
                      const link = prompt('Enter the link');
                      const pic = require("./photos/Placeholder.png");
                      if (name && link) {
                        this.setState(state => ({
                          associations: [...state.associations, {id: uuid, pic, name, link}]
                        }));
                      }
                    }}>
                      &#9998;</Button>
                    <td><ui><img src = {pic}/></ui></td>
                    <td><ul>{name}</ul></td>
                    <td><ul><a href={link}>{link}</a></ul></td>
                  </tr>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
    )
  }
}

export default Associations;
