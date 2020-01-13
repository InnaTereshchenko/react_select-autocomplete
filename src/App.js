import React, { useEffect, useState } from 'react';
import './App.css';
import SelectAutocomplete from './SelectAutocomplete';
import { countries } from './countries';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(async() => {
    setAllCountries(countries);
  }, []);

  return (
    <div className="App">
      <h1>Select Autocomplete Component</h1>
      <p>
        Select one country of
        {' '}
        {allCountries.length}
      </p>
      <SelectAutocomplete countries={allCountries} />
    </div>
  );
}

export default App;
