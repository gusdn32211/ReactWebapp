import React from 'react';
import { createStore } from "redux";

const reducer = function(state, action) {
	if (action.type === "INC"){
		state=state+action.payload;
	}
	if (action.type === "DEC"){
		state=state-action.payload;
	}
	return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})


// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>React App</h1>
// 			</div>
// 		)
// 	}
// }