import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import axios from "axios";
import logger from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, middleware);

store.dispatch({
	type: "FETCH_DATA",
	payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})

store.dispatch((dispatch) => {
	// dispatch({type: "CHANGE_NAME", payload: "CLARENCE"})
	// dispatch({type: "CHANGE_AGE", payload: 21})
	// dispatch({type: "INC", payload: 1})
	// dispatch({type: "DEC", payload: 1})
})

export default store;
