// src/components/AuthenticationButton.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div style={{ margin: "1rem" }}>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default AuthenticationButton;
