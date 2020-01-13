import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectAutocomplete = ({ countries }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="select__box">
      <input
        list="countries"
        placeholder="Choose a country"
        className="select"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <datalist id="countries">
        {countries.map(country => (
          <option value={country.label}>{country.label}</option>
        ))}
      </datalist>
      <button
        type="button"
        className="button"
        onClick={() => setInputValue('')}
      >
        X
      </button>
    </div>
  );
};

SelectAutocomplete.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectAutocomplete;
