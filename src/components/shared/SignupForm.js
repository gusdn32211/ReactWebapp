import React from "react";
import timezones from '../../data/timezones';
import _ from 'lodash';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.setUserName = this.setUserName.bind(this);
    this.setUserEmail = this.setUserEmail.bind(this);
    this.setUserPassword = this.setUserPassword.bind(this);
    this.setTimezone = this.setTimezone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setUserName(e) {
    this.props.setUserName(e.target.value)
  }

  setUserEmail(e) {
    this.props.setUserEmail(e.target.value)
  }

  setUserPassword(e) {
    this.props.setUserPassword(e.target.value)
  }

  setTimezone(e) {
    this.props.setTimezone(e.target.value)
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.props.user);
    this.props.userSignupRequest(this.props.user);
  }

  render() {
    const timezoneOptions = _.map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
    	<form onSubmit={this.onSubmit}>
        <h1>Create an account!</h1>

        <div className="form-group">
            <label className="control-label">Username</label>
            <input
                onChange={this.setUserName}
                value={this.props.user.username}
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter Username">
            </input>

            <label className="control-label">Email</label>
            <input
                onChange={this.setUserEmail}
                value={this.props.user.email}
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter Email">
            </input>

            <label className="control-label">Password</label>
            <input
                onChange={this.setUserPassword}
                value={this.props.user.password}
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password">
            </input>

            <div className="form-group">
              <label className="control-label">Timezone</label>
              <select
                onChange={this.setTimezone}
                value={this.props.user.timezone} 
                className="form-control"
                name="timezone" >
                  <option value="" disabled>Choose your Timezone</option>
                  {timezoneOptions}
              </select>
            </div>

            <div className="form-group">
                <button className="btn btn-primary btn-lg">Sign up</button>
            </div>
        </div>
	    </form>
    );
  }
}

export default SignupForm;