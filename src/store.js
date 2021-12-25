import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer";

/* optional */
const myLogger = (store) => (next) => (action) => {
  console.log("logged action", action);
  next(action);
};
// custom middleware: https://www.youtube.com/watch?v=AgO7YcJeBh4&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=6
/* optional */

const middleware = [thunk, myLogger];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
