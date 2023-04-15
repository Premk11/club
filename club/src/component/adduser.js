import React from "react";
import { connect } from "react-redux";
import { addUserDetails } from "./actions/userActions";
import UserDetailsForm from "./components/UserDetailsForm";

const App = ({ userDetails, addUserDetails }) => {
  return (
    <div>
      <UserDetailsForm addUserDetails={addUserDetails} />
      {userDetails && (
        <div>
          <h2>Submitted User Details:</h2>
          <p>First Name: {userDetails.firstName}</p>
          <p>Last Name: {userDetails.lastName}</p>
          <p>Email: {userDetails.email}</p>
          <p>Gender: {userDetails.gender}</p>
          <p>
            Marital Status: {userDetails.maritalStatus ? "Married" : "Single"}
          </p>
          {userDetails.familyMembers.length > 0 && (
            <div>
              <h3>Family Members:</h3>
              <ul>
                {userDetails.familyMembers.map((member, index) => (
                  <li key={index}>{member.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserDetails: (userDetails) => dispatch(addUserDetails(userDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
export const ADD_USER_DETAILS = "ADD_USER_DETAILS";

export const addUserDetails = (userDetails) => {
  return {
    type: ADD_USER_DETAILS,
    payload: userDetails,
  };
};
