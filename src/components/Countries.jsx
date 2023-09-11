import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visited, setVisited] = useState([]);
  const handleVisited = (country) => {
    const newVisited = [...visited, country];
    setVisited(newVisited);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <section>
      <p className="text-base font-bold text-opacity-20 text-purple-500 mb-3">
        Countries: {countries.length}
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="my-5 border-2 w-full rounded-xl border-purple-700 p-5">
          <h3 className="text-2xl font-bold">Visited ({visited.length})</h3>
          <hr className="w-64 my-3 mx-auto border-purple-500" />
          <div className="container p-5 m-3  flex flex-wrap gap-2">
            {visited.map((country, idx) => (
              <button
                key={idx}
                className="btn border-none bg-gray-700 min-h-0 h-10 rounded-xl"
              >
                {country?.flag} {country?.name?.common}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
        {countries.map((country, idx) => (
          <Country
            key={idx}
            country={country}
            handleVisited={handleVisited}
          ></Country>
        ))}
      </div>
    </section>
  );
};

export default Countries;
