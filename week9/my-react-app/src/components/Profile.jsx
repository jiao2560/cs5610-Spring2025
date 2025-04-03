// src/components/Profile.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log("USER OBJECT:", user);

  if (!isAuthenticated) {
    return <p>You must be logged in to see your profile.</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Profile</h2>
      <img
        src={user.picture}
        alt={user.name}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
