import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-blue-500">Jur</div>
      </div>

      {/* Steps Section */}
      <div className="flex-1 mx-8">
        <div className="flex items-center justify-center space-x-6">
          {["Preliminary", "Your Details", "KYC", "Parties", "Claim", "Review", "Payment"].map(
            (step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full ${
                    index < 4
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  } flex items-center justify-center`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-xs ${
                    index < 4 ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Profile and Notification Buttons */}
      <div className="flex items-center space-x-4">
        {/* Notification Button */}
        <button
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center relative hover:bg-gray-300"
          title="Notifications"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-5-5.917V5a2 2 0 10-4 0v.083A6.002 6.002 0 004 11v3.159c0 .417-.162.82-.445 1.114L2 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile Button */}
        <button
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
          title="Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A11.963 11.963 0 0112 15c2.385 0 4.59.832 6.878 2.246M15 11a3 3 0 11-6 0 3 3 0 016 0zM12 3c-4.418 0-8 3.582-8 8 0 2.697 1.268 5.074 3.212 6.596M12 21c-3.042 0-5.75-1.16-7.879-3.196M21.879 17.804A11.963 11.963 0 0012 21c2.389 0 4.594-.832 6.879-2.196"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
