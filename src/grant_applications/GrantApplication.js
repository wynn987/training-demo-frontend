import React, { Component } from 'react';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_URL_PREFIX } from '../utilities/helper';

class GrantApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grant_application: null
    };
  }

  _fetchGrantApplicationData(id) {
    // Fetch grant_application data
    let url = API_URL_PREFIX + `/grant_applications/${id}`;
    fetch(url)
    .then((results) => {
      return results.json();
    }).then((data) => {
      this.setState({grant_application: data});
    });
  }

  componentWillMount() {
    let id = parseInt(this.props.match.params.id, 10);
    this._fetchGrantApplicationData(id);
  }

  render() {
    return (
      <div>
        <div className='main-content'>
        </div>
      </div>
    );
  }
}

export default GrantApplication;
