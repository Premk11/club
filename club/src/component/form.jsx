import React, { useState } from "react";
import { connect } from "react-redux";
import { addUserDetails } from "./actions";

const UserDetailsForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([""]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "isMarried") {
      setIsMarried(!isMarried);
    }
  };

  const handleFamilyInputChange = (event, index) => {
    const { value } = event.target;
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index] = value;
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleAddFamilyMember = () => {
    const updatedFamilyMembers = [...familyMembers, ""];
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleRemoveFamilyMember = (index) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers.splice(index, 1);
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      firstName,
      lastName,
      email,
      gender,
      isMarried,
      familyMembers,
    };
    props.addUserDetails(userDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          pattern="[A-Za-z]+"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          pattern="[A-Za-z]+"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={handleInputChange}
          required
        >
          <option value="">--Select Gender--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="isMarried">Marital Status:</label>
        <input
          type="checkbox"
          id="isMarried"
          name="isMarried"
          checked={isMarried}
          onChange={handleInputChange}
        />
        <label htmlFor="isMarried">Married</label>
      </div>
      <div>
        <label>Family Members Name:</label>
        {familyMembers.map((member, index) => (
          <div key={index}>
            <input
              type="text"
              value={member}
              onChange={(event) => handleFamilyInputChange(event, index)}
            />
            {index === 0 ? (
              <button type="button" onClick={handleAddFamilyMember}>
                +
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleRemoveFamilyMember(index)}
              >
                -
              </button>
            )}
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addUserDetails: (userDetails) => dispatch(addUserDetails(userDetails)),
});

export default connect(null, mapDispatchToProps)(UserDetailsForm);
