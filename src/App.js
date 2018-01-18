import React, { Component } from 'react';
import './App.css';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Routes from "./Routes";

const Header = () => (
  <div style={{textAlign: "center"}}>
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
