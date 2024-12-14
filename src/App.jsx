import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ClaimForm from "./components/ClaimForm";
import ProgressBar from "./components/ProgressBar";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {/* Progress bar */}
          <ProgressBar currentStep={3} totalSteps={7} />

          {/* Claim Form */}
          <ClaimForm />

          {/* File Upload Section */}
          <div className="mt-6">
            <FileUpload label="Upload Contract Documents" />
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

