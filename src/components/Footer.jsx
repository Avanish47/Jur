import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-center p-4 border-t border-gray-200">
      <p className="text-gray-600 text-sm">
        © 2024 Jur. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-blue-500 hover:underline">
          Terms
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          Privacy
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
