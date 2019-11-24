import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const RatesCard = (props) => {
  return (
    <div>
      <Card>
          <CardTitle>
              Rates:
          </CardTitle>
        <CardBody>
          <CardText> Life coaching is paid on a per miniute basis. The current rate is 1 dollar per minute.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default RatesCard;