import React from 'react';
import { combineReducers, createStore } from "redux";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

const userReducer = (state={}, action) => {
	switch(action.type) {
		case "CHANGE_NAME": {
			state = {...state, name: action.payload}
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age: action.payload}
			break;
		}
	}
	return state;
};

const tweetsReducer = (state=[], action) => {
	return state;
};

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer,
})

const store = createStore(reducers);

store.subscribe(() => {
	console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "CLARENCE"})
store.dispatch({type: "CHANGE_AGE", payload: 21})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})

import Personal from "./components/Personal";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Settings from "./components/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
	  <Route path="personal" name="personal" component={Personal}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);