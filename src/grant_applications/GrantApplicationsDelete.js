import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import "./GrantApplicationsDelete.css";
import {GrantApplicationDelete} from './GrantApplicationActions'

class GrantApplicationsIndex extends Component {

  grant_application = {}
  matchId(grant_application){
    return grant_application.id === this.props.selectedId
  }
  componentWillMount(){
    this.grant_application = this.props.grantApplications.find(this.matchId, this)
  }

  handleCancel(){
    this.props.history.push('/grant_applications')
  }

  handleConfirm(){
    this.props.doDelete(this.props.selectedId)
  }

  componentDidUpdate(){
    if (this.props.deleteComplete){
      this.props.history.push('/grant_applications')
    }
  }

  _renderGrantApplications() {
    console.log(this.props)
    if (this.props.showError || this.grant_application == null){
      return (
      <div className="Message">
        <h3>Sorry, you are not authorised to access this page!</h3>
        <p>Please log in as an appropriate user</p>
      </div>
      )
    }
    else{
      return (
        <div className='grant_div'>
        <h3>Delete Confirmation</h3>
        <hr/>
        <Row>
          <Col xs={12}>
            <p style={{ color: 'black' }}>Application Type: {this.grant_application.application_type}</p>
            <p style={{ color: 'black' }}>Applicant Name: {this.grant_application.applicant_name}</p>
            <p style={{ color: 'black' }}>Application Status: {this.grant_application.status}</p>
          </Col>
        </Row>
        <br/>
          <Row className='pull-right'>
            <Col xs={6}>
              <Button type="button" onClick={() => this.handleCancel()}>Back</Button>
            </Col>
            <Col xs={6}>
              <Button bsStyle='primary' type="button" onClick={() => this.handleConfirm()}>Confirm</Button>
            </Col>
          </Row>
        </div>
      );
    }
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

const mapStateToProps = (state) => {
  return {
      selectedId: state.grantApplicationSelector,
      grantApplications: state.grantApplications,
      deleteComplete: state.grantsDeleteComplete
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doDelete: (id) => dispatch(GrantApplicationDelete(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GrantApplicationsIndex);
