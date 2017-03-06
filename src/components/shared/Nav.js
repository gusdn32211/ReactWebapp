import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div>
            <ul class="nav navbar-nav">
              <li>
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li>
                <Link to="personal">Personal</Link>
              </li>
              <li>
                <Link to="settings">Settings</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}