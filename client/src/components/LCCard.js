import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const LCCard = (props) => {
  var newText;
  function updateText() {
    const v = newText.value;
    props.updateText(v)
  }

  if (!props.loggedIn) {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={require("./photos/clc.jpg")} alt="clc image" />
          <CardBody>
            <CardText>{props.infoText}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  else {
    return (
      <Card>
      <CardImg top width="100%" src={require("./photos/clc.jpg")} alt="clc image" />
      <CardBody>
      <CardText>{props.infoText}</CardText>
      <form>
          <input
          type="text"
          placeholder="New Description"
          ref={ (input) => newText = input }
          onChange={updateText.bind(this)}
          ></input>
      </form>
      <Button onClick={() => props.editText()}>Edit</Button>
      </CardBody>
  </Card>
    );

  }
};

export default LCCard;