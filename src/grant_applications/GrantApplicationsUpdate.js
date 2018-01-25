import React, {Component} from "react";
import {Col, Row, Button} from 'react-bootstrap';
import {Control, Form} from 'react-redux-form';
import "./GrantApplicationsUpdate.css";
import {connect} from 'react-redux';
import { GrantApplicationUpdate } from "./GrantApplicationActions";

class GrantApplicationsUpdate extends Component {
  handleSubmit(id, grant_application) {
    this
      .props
      .updateGrantApplication(id, grant_application)
  }
  matchId(grant_application){
    return grant_application.id === this.props.selectedId
  }
  componentWillMount(){
    const selectedApplication = this.props.grantApplications.find(this.matchId, this)
    console.log(JSON.stringify(selectedApplication))
    this.props.grant_application.application_type = selectedApplication.application_type
    this.props.grant_application.applicant_name = selectedApplication.applicant_name
    console.log(JSON.stringify(this.props.grant_application))
  }

  handleCancel(){
    this.props.history.push('/grant_applications')
  }

  componentDidUpdate(){
    if (this.props.updateComplete){
      this.props.history.push('/grant_applications')
    }
  }

  render() {
    return (
      <div className='update-page'>
        <Form
          className='form'
          model="grant_application"
          onSubmit={(grant_application) => this.handleSubmit(this.props.selectedId, grant_application)}>

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
              <Button bsStyle="primary" type="submit">Update</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedId: state.grantApplicationSelector,
    grantApplications: state.grantApplications,
    grant_application: state.grant_application,
    updateComplete: state.grantsUpdateComplete
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGrantApplication: (id, grant_application) => dispatch(GrantApplicationUpdate(id, grant_application))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GrantApplicationsUpdate);