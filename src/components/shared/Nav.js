import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div>
            <ul className="nav navbar-nav">
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
            <ul className="nav navbar-nav navbar-right">
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