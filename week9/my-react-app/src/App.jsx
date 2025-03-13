import React from "react";
import Header from "./components/Header";  // Import Header component

export default function App() {
  const appName = "My Awesome App";  // Define app name
  const version = 2;  // Define app version

  return (
    <div>
      {/* Pass appName and version as props */}
      <Header myAppName={appName} version={version} />
    </div>
  );
}

