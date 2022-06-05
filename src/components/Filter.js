import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}) => {
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Search 
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );

      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  // Filter

  const filterRegions = async (region) => {
    const url = "https://restcountries.com/v3.1/region";
    const res = await fetch(`${url}/${region}`);
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {

    filterRegions();
  }, []);

  return (
    <>
      <form className="form-control" id="form" onSubmit={handleSubmit}>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search for a Country...."
            onChange={(e) => searchCountries(e.target.value)}
          />
        </div>

        <div className="region-filter">
          <select
            name="select"
            id="select"
            className="select"
            onChange={(e) => filterRegions(e.target.value)}
            value={regions.name}
          >
            <option value="Africa">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
