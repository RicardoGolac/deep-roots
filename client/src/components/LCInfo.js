import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

const LCInfo = props => {
  var newRates;
  function updateRates() {
    const v = newRates.value;
    props.updateRates(v);
  }
  var newBen;
  function updateBen() {
    const v = newBen.value;
    props.updateBen(v);
  }
  var newHowTo;
  function updateHowTo() {
    const v = newHowTo.value;
    props.updateHowTo(v);
  }

  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (props.loggedIn) {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Benefits
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Rates
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              How to Start
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tabtext" activeTab={activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>{props.rates}</h4>
              </Col>
            </Row>
            <form>
              <textarea
                type="text"
                placeholder="New Description"
                ref={input => (newRates = input)}
                onChange={updateRates.bind(this)}
              ></textarea>
            </form>
            <Button onClick={props.editRates}>Edit</Button>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>{props.howTo}</h4>
              </Col>
            </Row>
            <form>
              <textarea
                type="text"
                placeholder="New Description"
                ref={input => (newHowTo = input)}
                onChange={updateHowTo.bind(this)}
              ></textarea>
            </form>
            <Button onClick={props.editHowTo}>Edit</Button>
          </TabPane>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>{props.benefits}</h4>
              </Col>
            </Row>
            <form>
              <textarea
                type="text"
                placeholder="New Description"
                ref={input => (newBen = input)}
                onChange={updateBen.bind(this)}
              ></textarea>
            </form>
            <Button onClick={props.editBenefits}>Edit</Button>
          </TabPane>
        </TabContent>
      </div>
    );
  } else {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Benefits
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Rates
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              How to Start
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tabtext" activeTab={activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>{props.rates}</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>{props.howTo}</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>{props.benefits}</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
};

export default LCInfo;
