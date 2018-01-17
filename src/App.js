import React, { Component } from 'react';
import './App.css';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Routes from "./Routes";

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
        }}>WYNN</h1>
        <p style={{marginTop: "0", marginBottom: "2em"}}>Demo App</p>
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
        <Routes />
        <Footer />
      </div>
    );
  }
}


export default App;
