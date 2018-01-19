import React, { Component } from 'react';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class GrantApplicationsIndex extends Component {

  componentWillMount() {
    this._fetchGrantApplicationsData();
  }

  _renderGrantApplications() {
    return this.state.grant_applications.map((grant_application, i) => {
      let name = grant_application.applicant_name.toLowerCase().replace(/ /g, "_");
      return (
        <Link key={i} to={`/grant_applications/${grant_application.id}`}>
          <Row>
            <Col xs={12}>
              <p style={{ color: 'black' }}><b>Applicant Name: {grant_application.applicant_name} | Application Type: {grant_application.application_type}</b></p>
              <br/>
              <br/>
            </Col>
          </Row>
          <hr />
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='main-content'>
          {this._renderGrantApplications()}
        </div>
      </div>
    );
  }
}

export default GrantApplicationsIndex;
