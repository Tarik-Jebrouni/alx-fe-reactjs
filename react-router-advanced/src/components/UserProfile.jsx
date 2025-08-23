// src/components/UserProfile.jsx
import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();

  return (
    <div>
      <h3>User Profile</h3>
      <p>Displaying profile for user with ID: {userId}</p>
    </div>
  );
}

export default UserProfile;
