import React from "react";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const userDetails = useSelector((state) => state.userDetails);

  if (!userDetails) {
    return <div>No details submitted yet.</div>;
  }

  const { firstName, lastName, email, gender, maritalStatus, familyMembers } =
    userDetails;

  return (
    <div>
      <h2>User Details:</h2>
      <div>
        <strong>First Name:</strong> {firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {lastName}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Gender:</strong> {gender}
      </div>
      <div>
        <strong>Marital Status:</strong> {maritalStatus ? "Married" : "Single"}
      </div>
      <div>
        <strong>Family Members:</strong>
        <ul>
          {familyMembers.map((member, index) => (
            <li key={index}>{member.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
