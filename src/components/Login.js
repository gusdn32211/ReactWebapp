import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {setUserName, setUserPassword} from "../actions"



class Login extends React.Component {

  constructor(props) {
   super(props);
   this.setUserName = this.setUserName.bind(this);
   this.setUserPassword = this.setUserPassword.bind(this);
	}

	setUserName(e) {
	 this.props.setUserName(e.target.value)
	}

	setUserPassword(e) {
	 this.props.setUserPassword(e.target.value)
	}

	render() {
    return (
    	<div>
    		<h1>Login</h1>
		    
		    <label>Username</label>
		    <input type="text" placeholder="Enter Username" onChange={this.setUserName}/><br/>

		    <label>Password</label>
		    <input type="password" placeholder="Enter Password" onChange={this.setUserPassword}/>
		    
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
		setUserName: setUserName,
		setUserPassword: setUserPassword
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);