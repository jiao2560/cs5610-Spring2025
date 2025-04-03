// src/components/AuthenticationButton.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthenticationButton = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div style={{ margin: "1rem" }}>
        <img
          src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"
          alt="Loading..."
          style={{ height: "50px" }}
        />
      </div>
    );
  }

  return (
    <div style={{ margin: "1rem" }}>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default AuthenticationButton;

