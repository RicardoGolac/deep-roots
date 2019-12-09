import React from "react";
import { Button } from "reactstrap";

const LCCard = props => {
  var newText;
  function updateText() {
    const v = newText.value;
    props.updateText(v);
  }

  if (!props.loggedIn) {
    return (
      <div>
        <img
          className="lcimg"
          src={require("./photos/clc.jpg")}
          alt="Smiley face"
          height="250"
          width="320"
        ></img>
        <h4 className="mainInfo">{props.infoText}</h4>
      </div>
    );
  } else {
    return (
      <div>
        <img
          className="lcimg"
          src={require("./photos/clc.jpg")}
          alt="Smiley face"
          height="250"
          width="320"
        ></img>
        <h4 className="mainInfo">{props.infoText}</h4>
        <form>
          <textarea
            type="text"
            placeholder="New Description"
            ref={input => (newText = input)}
            onChange={updateText.bind(this)}
          ></textarea>
        </form>
        <Button className="lcEditBtn" onClick={() => props.editText()}>
          Edit
        </Button>
      </div>
    );
  }
};

export default LCCard;