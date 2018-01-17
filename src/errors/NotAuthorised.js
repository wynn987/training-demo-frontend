import React from "react";
import "./errors.css";
import {Link} from 'react-router-dom';

export default () =>
  <div className="Message">
    <h3>Sorry, you are not authorised to access this page!</h3>
    <p>Please <Link>log in</Link> as an appropriate user</p>
  </div>;