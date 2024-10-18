import { useState } from 'react';
import Select from 'react-select';

function SearchBar({ onSearch, healthConditions, onConditionChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConditions, setSelectedConditions] = useState([]);

  
  const handleSearch = () => {
    onSearch(searchTerm, selectedConditions);
  };

  const handleConditionChange = (e) => {
    const { options } = e.target;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setSelectedConditions(values);
    onConditionChange(values);
  };

  return (
    <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <Select
              isMulti
              options={healthConditions}
              className="w-full"
              placeholder="Select health conditions"
              onChange={setSelectedConditions}
              value={selectedConditions}
            />
      <button onClick={handleSearch}>Search</button>
    </div>

    <div className="relative flex items-center space-x-2 max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
            {/* Multi-select dropdown */}
            <select multiple onChange={handleConditionChange}>
        {healthConditions.map((condition, index) => (
          <option key={index} value={condition}>
            {condition}
          </option>
        ))}
      </select>
          </div>
        </>
  );
}

export default SearchBar;
