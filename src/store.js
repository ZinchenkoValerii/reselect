import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import commentsReducer from "./commentsReducer";
import filterReducer from "./filterReducer";

import logger from "./logger";

const rootReducer = combineReducers({
  commentsReducer,
  filterReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ logger }))
);

export default store;
