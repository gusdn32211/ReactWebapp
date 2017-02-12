import React from "react";
import { connect } from "react-redux"

// @connect((store) => {
// 	return {
// 		user: store.user
// 	}
// })

export default class Home extends React.Component {
  render() {
  	console.log(this.props)
    return (
      <h1>Home</h1>
    );
  }
}