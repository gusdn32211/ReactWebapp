import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SignupForm from "./shared/SignupForm";
import { 
  setUserNameRegister,
  setUserPasswordRegister,
  setUserEmailRegister,
  setTimezone,
  userSignupRequest,
  setUserErrorsRegister,
  clearRegisterErrors
} from "../actions/registerAction";
import { registerSelector } from "../selectors";

class Signup extends React.Component {
  render() {
    return (
    	<div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4"></div>
          <SignupForm
            setUserName={this.props.setUserNameRegister}
            setUserPassword={this.props.setUserPasswordRegister}
            setUserEmail={this.props.setUserEmailRegister}
            setTimezone={this.props.setTimezone}
            userSignupRequest={this.props.userSignupRequest}
            setUserErrorsRegister={this.props.setUserErrorsRegister}
            clearRegisterErrors={this.props.clearRegisterErrors}
            // username={this.props.register.username}
            // password={this.props.register.password}
            // timezone={this.props.register.timezone}
            // email={this.props.register.email}
            user={this.props.register}>
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
    setTimezone: setTimezone,
    userSignupRequest: userSignupRequest,
    setUserErrorsRegister: setUserErrorsRegister,
    clearRegisterErrors: clearRegisterErrors
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
