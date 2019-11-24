import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const LCCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={require("./photos/clc.jpg")} alt="clc image" />
        <CardBody>
          <CardText>Creative life coaching is a personalized service to help you evolve yourself and your creative mind. These services last for up to two months. They are personalized to you and your needs.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default LCCard;