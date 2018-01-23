import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GrantApplicationIndex } from './GrantApplicationActions';
import {
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class GrantApplicationsIndex extends Component {
  componentWillMount() {
    this.props.grantApplications();
  }

  _renderGrantApplications() {
    if (this.props.indexError || this.props.grant_applications == null){
      return (
      <div className="Message">
        <h3>Sorry, you are not authorised to access this page!</h3>
        <p>Please log in as an appropriate user</p>
      </div>
      )
    }
    else{
      return this.props.grant_applications.map((grant_application, i) => {
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
      grant_applications: state.grantApplications,
      indexError: state.grantsIndexError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    grantApplications: () => dispatch(GrantApplicationIndex())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GrantApplicationsIndex);
