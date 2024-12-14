import React, { useState } from 'react';

const ClaimForm = () => {
  const [contractValue, setContractValue] = useState('');
  const [contractCurrency, setContractCurrency] = useState('USD');
  const [claimValue, setClaimValue] = useState('');
  const [claimCurrency, setClaimCurrency] = useState('USD');
  const [place, setPlace] = useState('');
  const [language, setLanguage] = useState('');
  const [isPlaceAgreement, setIsPlaceAgreement] = useState(false);
  const [isLanguageAgreement, setIsLanguageAgreement] = useState(false);

  const handleNumberInputChange = (event, setState) => {
    const value = event.target.value;
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setState(value);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold mb-4">
        File your Claim. <span className="font-light">(Approx 5 Minutes)</span>
      </h1>

      {/* Container for Side-by-Side Sections */}
      <div className="flex flex-wrap gap-6">
        {/* Claim Value Section */}
        <div className="flex-1">
          <h2 className="text-lg font-medium mb-2">Claim Value</h2>
          <div className="space-y-4">
            {/* Contract Value Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Contract Value</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={contractValue}
                  onChange={(e) => handleNumberInputChange(e, setContractValue)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="10000.00"
                  required
                />
                <select
                  value={contractCurrency}
                  onChange={(e) => setContractCurrency(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-2"
                  required
                >
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </div>

            {/* Claim Value Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Claim Value</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={claimValue}
                  onChange={(e) => handleNumberInputChange(e, setClaimValue)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="15000.00"
                  required
                />
                <select
                  value={claimCurrency}
                  onChange={(e) => setClaimCurrency(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-2"
                  required
                >
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                </select>
              </div>
              <p className="text-sm mt-1" style={{ color: 'orange' }}>150% of Contract Value</p>
            </div>
          </div>
        </div>

        {/* Place Section */}
        <div className="flex-1">
          <h2 className="text-lg font-medium mb-2">Place</h2>
          <div>
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Select the Place for proceedings"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-light mb-1">
              Is the place for the proceedings the one mentioned in the agreement?
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="placeAgreement"
                  checked={isPlaceAgreement}
                  onChange={() => setIsPlaceAgreement(true)}
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="placeAgreement"
                  checked={!isPlaceAgreement}
                  onChange={() => setIsPlaceAgreement(false)}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="flex-1">
          <h2 className="text-lg font-medium mb-2">Language</h2>
          <div>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Select the language for proceedings"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-light mb-1">
              Is the language for the proceedings the one mentioned in the agreement?
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="languageAgreement"
                  checked={isLanguageAgreement}
                  onChange={() => setIsLanguageAgreement(true)}
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="languageAgreement"
                  checked={!isLanguageAgreement}
                  onChange={() => setIsLanguageAgreement(false)}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;





