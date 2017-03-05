import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDataUser } from "../selectors"

class Home extends React.Component {
  render() {
    return (
    	<div>
	      <h1>Home</h1>
        <div>{this.props.dataUser}</div>
	    </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		dataUser: fetchDataUser(state)
	}
}

export default connect(mapStateToProps)(Home);