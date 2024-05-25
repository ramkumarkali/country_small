import React, { useEffect, useState } from "react";

const Flag = ({ flagurl, name,altname }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "eenter",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        flexDirection: "column",
        width: "200px",
      }}
    >
      <img src={flagurl} alt={altname} style={{ width: "100px", height: "100px" }} />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const API = "https://restcountries.com/v3.1/all";
  const [countries, setcoutries] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setcoutries(data));
  }, []);
  console.log(countries);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "eenter",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      {countries.map((country) =><Flag flagurl={country.flags.png} name={country.name.common} altname={country.flag.alt}/>)}
    </div>
  );
}

export default Countries;