import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SignupForm from "./shared/SignupForm";
import { setUserNameRegister, setUserPasswordRegister, setUserEmailRegister, setTimezone } from "../actions/register";
import { registerSelector } from "../selectors";

class Signup extends React.Component {
  render() {
    return (
    	<div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4"></div>
          <SignupForm
            setUserName={this.props.setUserNameRegister}
            setUserPassword={this.props.setUserPasswordRegister}
            setUserEmail={this.props.setUserEmailRegister}
            setTimezone={this.props.setTimezone}
            username={this.props.register.username}
            password={this.props.register.password}
            timezone={this.props.register.timezone}
            email={this.props.register.email}>
          </SignupForm>
        </div>
	    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    register: registerSelector(state)
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setUserNameRegister: setUserNameRegister,
    setUserPasswordRegister: setUserPasswordRegister,
    setUserEmailRegister: setUserEmailRegister,
    setTimezone: setTimezone
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
