import React from "react";
import Header from "./components/Header";

export default function App() {
  const appName = "My Awesome App";
  const version = 2;

  return (
    <div className="app-container">  {/* Apply className for styling */}
      <Header myAppName={appName} version={version} />
    </div>
  );
}
