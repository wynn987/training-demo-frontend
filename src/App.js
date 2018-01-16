import React, { Component } from 'react';
import './App.css';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import GrantApplicationsIndex from './grant_applications/GrantApplicationIndex';
import GrantApplication from './grant_applications/GrantApplication';

const Header = () => (
  <div>
    <a href="/" style={{
      color: "white"
    }}>
      <div className="left-sidebar" style={{
        backgroundColor: "#4A8EE0",
        textAlign: "center",
        paddingLeft: "0"
      }}>
        <h1 style={{
          fontSize: "60px",
          marginBottom: "0"
        }}>WRP</h1>
        <p style={{marginTop: "0", marginBottom: "2em"}}>WOG Review Platform</p>
      </div>
    </a>
    <div className="main-content">
      <div style={{
        textAlign: "right",
        marginBottom: "3em"
      }}>
      </div>
      <div>
        <Row>
          <Col xs={2} style={{textAlign: "center"}}><b><a href="/" style={{textDecoration: "none", color: "black"}}>Home</a></b></Col>
          <Col xs={2} style={{textAlign: "center"}}><b>Write a Review</b></Col>
          <Col xs={2} style={{textAlign: "center"}}><b>FAQ</b></Col>
          <Col xsOffset={4} xs={2} style={{ textAlign: "right" }}>
            <Button bsStyle="primary">Logout</Button>
          </Col>
        </Row>
      </div>
      <hr />
    </div>
  </div>
);

const Footer = () => (
  <div style={{textAlign: "center"}}>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Switch>
          <Route exact path='/' component={GrantApplicationsIndex}/>
          <Route exact path='/grant_applications' component={GrantApplicationsIndex}/>
          <Route exact path='/grant_applications/:id' component={GrantApplication}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
