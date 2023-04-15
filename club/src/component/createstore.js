import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import UserDetailsForm from "./components/UserDetailsForm";
import UserDetails from "./components/UserDetails";

const store = createStore(rootReducer);

const App = () => {
  return (
    <div>
      <UserDetailsForm />
      <UserDetails />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
