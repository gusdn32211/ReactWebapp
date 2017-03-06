import React from "react";
import timezones from '../../data/timezones';
import map from 'lodash/map';

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
    console.log(this.props.username);
  }

  render() {
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
    	<form onSubmit={this.onSubmit}>
        <h1>Create an account!</h1>

        <div class="form-group">
            <label class="control-label">Username</label>
            <input
                onChange={this.setUserName}
                value={this.props.username}
                type="text"
                name="username"
                class="form-control"
                placeholder="Enter Username">
            </input>

            <label class="control-label">Email</label>
            <input
                onChange={this.setUserEmail}
                value={this.props.email}
                type="text"
                name="email"
                class="form-control"
                placeholder="Enter Email">
            </input>

            <label class="control-label">Password</label>
            <input
                onChange={this.setUserPassword}
                value={this.props.password}
                type="password"
                name="password"
                class="form-control"
                placeholder="Enter Password">
            </input>

            <div class="form-group">
              <label class="control-label">Timezone</label>
              <select
                onChange={this.setTimezone}
                value={this.props.timezone} 
                class="form-control"
                name="timezone" >
                  <option value="" disabled>Choose your Timezone</option>
                  {options}
              </select>
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-lg">Sign up</button>
            </div>
        </div>
	    </form>
    );
  }
}

export default SignupForm;