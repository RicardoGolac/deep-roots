import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const LCInfo = (props) => {

  var newRates;
  function updateRates() {
    const v = newRates.value;
    props.updateRates(v)
  }
  var newBen;
  function updateBen() {
    const v = newBen.value;
    props.updateBen(v)
  }
  var newHowTo;
  function updateHowTo() {
    const v = newHowTo.value;
    props.updateHowTo(v)
  }

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  if (props.loggedIn) {
    return (
      <div>
        <Nav tabs>
        <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Benefits 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Rates
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
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
                <input
                type="text"
                placeholder="New Description"
                ref={ (input) => newRates = input }
                onChange={updateRates.bind(this)}
                ></input>
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
                  <input
                  type="text"
                  placeholder="New Description"
                  ref={ (input) => newHowTo = input }
                  onChange={updateHowTo.bind(this)}
                  ></input>
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
                  <input
                  type="text"
                  placeholder="New Description"
                  ref={ (input) => newBen = input }
                  onChange={updateBen.bind(this)}
                  ></input>
              </form>
              <Button onClick={props.editBenefits}>Edit</Button>
          </TabPane>
        </TabContent>
      </div>
    );
  }
  else {
    return (
      <div>
        <Nav tabs>
        <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Benefits 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Rates
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              How to Start
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tabtext" activeTab={activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Life coaching is paid on a per miniute basis. The current rate is 1 dollar per minute.</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
              <Row>
                  <Col sm="12">
                  <h4>If you are interested, please fill out the survey by clicking on the button below. Turbado will respond via email as soon as possible.</h4>
                  </Col>
              </Row>
          </TabPane>
          <TabPane tabId="1">
              <Row>
                  <Col sm="12">
                  <h4>Our Ancestors teach us that the beauty of life is working in tandem with the grand plan of creation. The courage of an Artist is being 
                      able to capture these aspects in their work to retain that, which is meaningful to us as human beings. To stay to one’s purpose and calling 
                      can be the most challenging task and the richest reward. Creative life coaching can help you do just that.</h4>
                  </Col>
              </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
  
}

export default LCInfo;