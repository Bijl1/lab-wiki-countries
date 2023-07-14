import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className='App-countries'>
        <CountriesList countries={countries} />
        <Routes>
          <Route path='/:alpha3Code' element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
