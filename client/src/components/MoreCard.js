import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const MoreCard = (props) => {
  return (
    <div>
      <Card>
          <CardTitle>
              More Info:
          </CardTitle>
        <CardBody>
          <CardText> If you are interested, please fill out the survey by clicking on the button below. Turbado will respond via email or phonecall as soon as possible.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MoreCard;