import React, { useState } from 'react';
import "./searchbar.css"
const SearchBar = ({ onSearch, healthConditions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleProductSearch = () => {
    // Basic validation
    if (!searchTerm || !age || !gender) {
      alert('Please provide product name, age, and gender.');
      return;
    }
    onSearch(searchTerm, selectedConditions);
  };

  const handleToggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    
    <div className="search-bar">

<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-300 lg:px-8">
  <div class="relative flex h-16 justify-between">
    <div class="relative z-10 flex px-2 lg:px-0">
      <div class="flex flex-shrink-0 items-center">
      
      </div>
    </div>
    <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
      <div class="w-full sm:max-w-xs">
      <div className="input-group">
        {/* Step 1: Input product name */}
        <input
          type="text"
          placeholder="Enter product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
      </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
  <div className="input-group">
        {/* Input for age */}
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>  <div className="input-group">
        {/* Input for gender */}
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="dropdown">
        <button type="button" onClick={handleToggleDropdown}>
          {dropdownVisible ? 'Hide Health Conditions' : 'Select Health Conditions'}
        </button>

        {dropdownVisible && (
          <div className="dropdown-content">
            {healthConditions.map((condition) => (
              <label key={condition}>
                <input
                  type="checkbox"
                  value={condition}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setSelectedConditions((prevConditions) =>
                      checked ? [...prevConditions, condition] : prevConditions.filter((c) => c !== condition)
                    );
                  }}
                />
                {condition}
              </label>
            ))}
          </div>
        )}
      </div>
        {/* Step 3: Submit button to trigger the search */}
        <button onClick={handleProductSearch}>Search</button>

  </div>
</div>





    </div>




  );
};

export default SearchBar;
