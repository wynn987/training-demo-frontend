import React, {Component} from "react";
import {Col, Row, Button, ButtonToolbar, FormGroup} from 'react-bootstrap';
import {Control, Form} from 'react-redux-form';
import "./GrantApplicationCreate.css";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class GrantApplicationCreate extends Component {
  handleSubmit(grant_application) {
    this
      .props
      .createGrantApplication(grant_application)
  }

  render() {
    return (
      <div className='create-page'>
        <Form
          className='form'
          model="grant_application"
          onSubmit={(grant_application) => this.handleSubmit(grant_application)}>

          <h3>Grant Application</h3>
          <hr/>
          <Row>
            <Col xs={12}>
              <label class='pull-left' htmlFor="grant_application.applicant_name">Applicant Name:</label>
              <Control
                type='text'
                placeholder='Applicant Name'
                model="grant_application.applicant_name"
                id="grant_application.applicant_name"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <label htmlFor="user.name" class='pull-left'>Application Type:</label>
              <Control.select
                className='form-control'
                model="grant_application.applicant_type"
                id="grant_application.applicant_type">
                <option value="SME">SME</option>
                <option value="MNC">MNC</option>
              </Control.select>
            </Col>
          </Row>
          <br/>
          <Row className='pull-right'>
            <Col xs={6}>
              <Button bsStyle="default" type="button">Cancel</Button>
            </Col>
            <Col xs={6}>
              <Button bsStyle="primary" type="submit">Create</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(GrantApplicationCreate);