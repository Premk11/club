import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import UserDetailsForm from "./UserDetailsForm";

ReactDOM.render(
  <Provider store={store}>
    <UserDetailsForm />
  </Provider>,
  document.getElementById("root")
);
import React, { useState } from "react";

const UserDetailsForm = ({ addUserDetails }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([{ name: "" }]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.checked);
  };

  const handleFamilyMemberChange = (index, event) => {
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers[index] = { name: event.target.value };
    setFamilyMembers(newFamilyMembers);
  };

  const handleAddFamilyMember = () => {
    const newFamilyMembers = [...familyMembers, { name: "" }];
    setFamilyMembers(newFamilyMembers);
  };

  const handleDeleteFamilyMember = (index) => {
    const newFamilyMembers = [...familyMembers];
    newFamilyMembers.splice(index, 1);
    setFamilyMembers(newFamilyMembers);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      firstName,
      lastName,
      email,
      gender,
      maritalStatus,
      familyMembers,
    };
    addUserDetails(userDetails);
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");
    setMaritalStatus(false);
    setFamilyMembers([{ name: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          pattern="[A-Za-z]+"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          pattern="[A-Za-z]+"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={handleGenderChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="maritalStatus">Marital Status:</label>
        <input
          type="checkbox"
          id="maritalStatus"
          checked={maritalStatus}
          onChange={handleMaritalStatusChange}
        />
      </div>
      <div>
        <label>Family Members:</label>
        {familyMembers.map((member, index) => (
          <div key={index}>
            <input
              type="text"
              value={member.name}
              onChange={(event) => handleFamilyMemberChange(index, event)}
              required
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleDeleteFamilyMember(index)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddFamilyMember}>
          Add Family Member
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserDetailsForm;
export const addUserDetails = (userDetails) => {
  return {
    type: "ADD_USER_DETAILS",
    payload: userDetails,
  };
};
