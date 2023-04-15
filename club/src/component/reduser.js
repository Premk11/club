import { createStore, combineReducers } from "redux";

const ADD_USER_DETAILS = "ADD_USER_DETAILS";

export const addUserDetails = (userDetails) => ({
  type: ADD_USER_DETAILS,
  payload: userDetails,
});

const userDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userDetails: userDetailsReducer,
});

const store = createStore(rootReducer);

export default store;
