import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

interface Action {
  type: string;
  payload: any;
}

const initialState = {};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
