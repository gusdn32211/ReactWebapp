import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {setUserNameLogin, setUserPasswordLogin} from "../actions/loginAction"

class Login extends React.Component {

  constructor(props) {
   super(props);
   this.setUserNameLogin = this.setUserNameLogin.bind(this);
   this.setUserPasswordLogin = this.setUserPasswordLogin.bind(this);
	}

	setUserNameLogin(e) {
	 this.props.setUserNameLogin(e.target.value)
	}

	setUserPasswordLogin(e) {
	 this.props.setUserPasswordLogin(e.target.value)
	}

	render() {
    return (
    	<div>
    		<h1>Login</h1>
		    <label>Username</label>
		    <input type="text" placeholder="Enter Username" onChange={this.setUserNameLogin}/><br/>

		    <label>Password</label>
		    <input type="password" placeholder="Enter Password" onChange={this.setUserPasswordLogin}/>
		    
		    <button type="submit">Login</button>
    	</div>
    );
	}
}

function mapStateToProps(state) {
	return {
	}
} 

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setUserNameLogin: setUserNameLogin,
		setUserPasswordLogin: setUserPasswordLogin
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);