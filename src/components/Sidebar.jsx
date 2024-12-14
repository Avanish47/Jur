import React from "react";
import JudicialImage from "../assets/Judicial.png";
const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen shadow-md border-r border-gray-200 p-4">
      <ul className="space-y-4">
        {["Dashboard", "My Cases", "Activities", "Calendar", "Files", "Open a Dispute"].map(
          (item, index) => (
            <li
              key={index}
              className="p-2 text-gray-600 hover:bg-blue-100 hover:text-blue-500 rounded cursor-pointer"
            >
              {item}
            </li>
          )
        )}
      </ul>
      <div className="mt-10 p-4 bg-blue-50 rounded shadow-sm">
        <h3 className="text-blue-500 font-bold text-lg">
          Get Justice on every Claims
        </h3>
        <img
          src={JudicialImage}
          alt="Scale Illustration"
          className="mt-4 mx-auto"
        />
      </div>
    </div>
  );
};

export default Sidebar;

