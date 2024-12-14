import React, { useRef } from 'react';

const FileUpload = () => {
  // References to file input elements
  const statementInputRef = useRef(null);
  const contractInputRef = useRef(null);
  const arbitrationInputRef = useRef(null);
  const additionalInputRef = useRef(null);
  const plusInputRef = useRef(null); // Reference for the "+" button

  const handleButtonClick = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-6">
        {/* Statement Section */}
        <div className="col-span-1">
          <h2 className="text-lg font-medium mb-4">Statement</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-500">Write your Statement Here</p>
            <p className="text-sm text-gray-500">or</p>
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => handleButtonClick(statementInputRef)}
              >
                Upload a PDF
              </button>
              <input
                type="file"
                accept=".pdf"
                ref={statementInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </div>

        {/* Agreement under Disputes Section */}
        <div className="col-span-1">
          <h2 className="text-lg font-medium mb-4">Agreement under Disputes</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Upload the Contract */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-500">Upload the Contract</p>
              <p className="text-sm text-gray-500">Max 2MB, PDF</p>
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => handleButtonClick(contractInputRef)}
                >
                  Upload
                </button>
                <input
                  type="file"
                  accept=".pdf"
                  ref={contractInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </div>
            </div>
            {/* Arbitration Agreement */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-500">Arbitration Agreement</p>
              <p className="text-sm text-gray-500">Max 2MB, PDF</p>
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => handleButtonClick(arbitrationInputRef)}
                >
                  Upload
                </button>
                <input
                  type="file"
                  accept=".pdf"
                  ref={arbitrationInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Documentation Section */}
        <div className="col-span-1">
          <h2 className="text-lg font-medium mb-4">Additional Documentation</h2>
          <div className="flex items-center space-x-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center w-full">
              <p className="text-sm text-gray-500">Upload the Contract</p>
              <p className="text-sm text-gray-500">Max 2MB, PDF</p>
              <div className="mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => handleButtonClick(additionalInputRef)}
                >
                  Upload
                </button>
                <input
                  type="file"
                  accept=".pdf"
                  ref={additionalInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </div>
            </div>
            {/* Add more button */}
            <div>
              <button
                className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-100"
                onClick={() => handleButtonClick(plusInputRef)}
              >
                +
              </button>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={plusInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;

