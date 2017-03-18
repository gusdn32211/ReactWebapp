import React from "react";
import { withRouter } from 'react-router';
import _ from 'lodash';
import classnames from 'classnames';
import timezones from '../../data/timezones';
import validateInput from '../../helpers/signup';
import TextFieldGroup from './TextFieldGroup';

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

  isValid() {
    const { errors, isValid } = validateInput(this.props.user)

    if (!isValid) {
      this.props.setUserErrorsRegister(errors)
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.clearRegisterErrors();

    if (this.isValid()) {
      this.props.userSignupRequest(this.props.user).then(
        () => {
          this.props.router.push('/');
        },
        ({data}) => this.props.setUserErrorsRegister(data)
      );
    }
  }

  render() {
    let errors = this.props.user.errors;
    let timezoneClassnames = classnames (
      'form-group',
      {'has-error' : errors.timezone}
    )
    const timezoneOptions = _.map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
    	<form onSubmit={this.onSubmit}>
        <h1>Create an account!</h1>

        <TextFieldGroup
          onChange={this.setUserName}
          value={this.props.user.username}
          error={errors.username}
          type="text"
          name="username"
          label="Username"
          placeholder="Enter Username">
        </TextFieldGroup>

        <TextFieldGroup
          onChange={this.setUserEmail}
          value={this.props.user.email}
          error={errors.email}
          type="text"
          name="email"
          label="Email"
          placeholder="Enter Email">
        </TextFieldGroup>

        <TextFieldGroup
          onChange={this.setUserPassword}
          value={this.props.user.password}
          error={errors.password}
          type="password"
          name="password"
          label="Password"
          placeholder="Enter Password">
        </TextFieldGroup>

        <div className={timezoneClassnames}>
          <label className="control-label">Timezone</label>
          <select
            onChange={this.setTimezone}
            value={this.props.user.timezone} 
            className="form-control"
            name="timezone" >
              <option value="" disabled>Choose your Timezone</option>
              {timezoneOptions}
          </select>
          {errors && <span className="help-block">{errors.timezone}</span>}
        </div>

        <div className="form-group">
            <button className="btn btn-primary btn-lg">Sign up</button>
        </div>
	    </form>
    );
  }
}

export default withRouter(SignupForm);