import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

const countriesData = require('./countries.json');

function App() {
  const [countries, setCountries] = useState(countriesData);

  return <div className="App"></div>;
}


export default App;