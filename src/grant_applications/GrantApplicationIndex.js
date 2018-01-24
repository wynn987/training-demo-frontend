import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GrantApplicationIndex, GrantApplicationShow} from './GrantApplicationActions';
import {Row, Col, Glyphicon, Button, ButtonGroup} from 'react-bootstrap';
import "./GrantApplicationIndex.css";
import {Link} from 'react-router-dom';

class GrantApplicationsIndex extends Component {
  componentWillMount() {
    this
      .props
      .grantApplications();
  }

  handleShowRequest(i) {
    this
      .props
      .showRequestSent(i);
  }

  _renderNewButton() {
    return (
      <div className='grant_new'>
        <Link to={`/grant_applications/create`}>
          <h2>NEW
            <Glyphicon
              style={{
              color: 'green',
              fontSize: '0.7em'
            }}
              glyph="plus"/></h2>
        </Link>
      </div>
    )
  }

  _renderGrantApplications() {
    if (this.props.indexError || this.props.grant_applications == null) {
      return (
        <div className="Message">
          <h3>Sorry, you are not authorised to access this page!</h3>
          <p>Please log in as an appropriate user</p>
        </div>
      )
    } else {
      return (this.props.grant_applications.map((grant_application, i) => {
        return (
          <div className='grant_row'>
            <Link
              key={i}
              to={`/grant_applications/${grant_application.id}`}
              onClick={() => this.handleShowRequest(grant_application.id)}>
              <Row>
                <Col xs={12}>
                  <p style={{
                    color: 'black'
                  }}>Applicant Name: {grant_application.applicant_name}
                    | Application Type: {grant_application.application_type}</p>
                  <br/>
                </Col>
              </Row>
            </Link>
            <Row className='pull-right'>
              <Col xs={12}>
              <ButtonGroup>
                <Button bsStyle="danger" type="button" >Delete</Button>
                <Button bsStyle="primary" type="button">Edit</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <hr/>
          </div>
        );
      }));
    }
  }

  render() {
    return (
      <div>
        <div className='main-content'>
          {this._renderNewButton()}
          {this._renderGrantApplications()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {grant_applications: state.grantApplications, indexError: state.grantsIndexError};
};

const mapDispatchToProps = (dispatch) => {
  return {
    grantApplications: () => dispatch(GrantApplicationIndex()),
    showRequestSent: (id) => dispatch(GrantApplicationShow(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GrantApplicationsIndex);
