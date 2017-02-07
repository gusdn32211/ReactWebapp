import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div>
            <ul class="nav navbar-nav">
              <li activeClassName="active">
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li activeClassName="active">
                <Link to="personal" >Personal</Link>
              </li>
              <li activeClassName="active">
                <Link to="settings" >Settings</Link>
              </li>
              <li>
                <button type="button" class="btn btn-default navbar-btn">Sign in</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}