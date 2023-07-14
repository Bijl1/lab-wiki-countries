import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({ countries }) => {
  return (
    <div className="countriesList">
      {countries.map((country) => (
        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
          <div className="countryItem">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            <span>{country.name.common}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;