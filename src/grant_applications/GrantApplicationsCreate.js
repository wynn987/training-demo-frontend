import React, {Component} from "react";
import {Col, Row, Button} from 'react-bootstrap';
import {Control, Form} from 'react-redux-form';
import "./GrantApplicationsCreate.css";
import {connect} from 'react-redux';
import { GrantApplicationCreate } from "./GrantApplicationActions";

class GrantApplicationsCreate extends Component {
  handleSubmit(grant_application) {
    this
      .props
      .createGrantApplication(grant_application)
  }

  handleCancel(){
    this.props.history.push('/grant_applications')
  }

  componentDidUpdate(){
    if (this.props.createComplete){
      this.props.history.push('/grant_applications')
    }
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
              <label className='pull-left' htmlFor="grant_application.applicant_name">Applicant Name:</label>
              <Control
                type='text'
                placeholder='Applicant Name'
                model="grant_application.applicant_name"
                id="grant_application.applicant_name"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <label htmlFor="grant_application.application_type" className='pull-left'>Application Type:</label>
              <Control.select
                defaultValue='SME'
                className='form-control'
                model="grant_application.application_type"
                id="grant_application.application_type">
                <option value="SME">SME</option>
                <option value="MNC">MNC</option>
              </Control.select>
            </Col>
          </Row>
          <br/>
          <Row className='pull-right'>
            <Col xs={6}>
              <Button type="button" onClick={() => this.handleCancel()}>Cancel</Button>
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

const mapStateToProps = (state) => {
  return {createComplete: state.grantsCreateComplete};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGrantApplication: (grant_application) => dispatch(GrantApplicationCreate(grant_application))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GrantApplicationsCreate);