import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addUserDetails } from "./actions";

const UserDetailsForm = ({ addUserDetails }) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    maritalStatus: "",
    familyMembers: [{ name: "" }],
  };
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    addUserDetails(formState);
  }, [formState, addUserDetails]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    if (name === "name") {
      const updatedFamilyMembers = formState.familyMembers.map((member, i) =>
        i === index ? { ...member, [name]: value } : member
      );
      setFormState({
        ...formState,
        familyMembers: updatedFamilyMembers,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  // form rendering and onSubmit event handler

  return <form onSubmit={handleSubmit}>// form fields and buttons</form>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserDetails: (userDetails) => dispatch(addUserDetails(userDetails)),
  };
};

export default connect(null, mapDispatchToProps)(UserDetailsForm);
function UserDetailsForm({ addUserDetails }) {
  // initial state and handleChange function
  const handleAddFamilyMember = () => {
    setFormState({
      ...formState,
      familyMembers: [...formState.familyMembers, { name: "" }],
    });
  };

  const handleDeleteFamilyMember = (index) => {
    const updatedFamilyMembers = formState.familyMembers.filter(
      (member, i) => i !== index
    );
    setFormState({
      ...formState,
      familyMembers: updatedFamilyMembers,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserDetails(formState);
    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formState.gender} onChange={handleChange}>
          <option value="">--Select Gender--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Marital Status:</label>
        <input
          type="checkbox"
          name="maritalStatus"
          checked={formState.maritalStatus}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Family Members:</label>
        {formState.familyMembers.map((member, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={(event) => handleChange(event, index)}
              required
            />
            <button
              type="button"
              onClick={() => handleDeleteFamilyMember(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddFamilyMember}>
          Add Family Member
        </button>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
