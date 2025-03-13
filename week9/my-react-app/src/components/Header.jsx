import React from "react";

export default function Header({ myAppName, version }) {
  console.log(myAppName, version);  // Log props to console

  return (
    <div>
      <header>
        <h1>Welcome to {myAppName} (v{version})</h1>
      </header>
    </div>
  );
}

