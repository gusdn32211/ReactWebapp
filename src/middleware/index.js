import { applyMiddleware, createStore } from "redux";
import { reducers } from "../reducers";
import logger from "redux-logger"

const middleware = applyMiddleware(logger())

const store = createStore(reducers, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "CLARENCE"})
store.dispatch({type: "CHANGE_AGE", payload: 21})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
