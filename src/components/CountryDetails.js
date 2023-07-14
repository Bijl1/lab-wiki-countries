import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, [id]);

  if (!country) {
    return <div>Loading...</div>;
  }

  const { name, capital, area, population } = country;

  return (
    <div className="countryDetails">
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default CountryDetails;
