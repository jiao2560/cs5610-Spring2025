// src/components/ProtectedRoute.jsx
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export default function ProtectedRoute({ Component }) {
  const ComponentWithAuth = withAuthenticationRequired(Component, {
    onRedirecting: () => (
      <div style={{ padding: "1rem" }}>
        <p>Redirecting you to the login page...</p>
      </div>
    ),
  });

  return <ComponentWithAuth />;
}
