import React, { Component } from 'react';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_URL_PREFIX } from '../utilities/helper';

class GrantApplicationsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grant_applications: [],
    };
  }

  _fetchGrantApplicationsData() {
    let url = API_URL_PREFIX + '/grant_applications';
    fetch(url)
    .then((results) => {
      return results.json();
    }).then((data) => {
      this.setState({ grant_applications: data });
    });
  }

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
