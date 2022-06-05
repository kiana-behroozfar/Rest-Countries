import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const url = "https://restcountries.com/v2/all";

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
    setIsLoading(false);
  };
  useEffect(() => {
    

    fetchCountries();
  }, []);

  
  return (


    <>
    
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />


      {isLoading  ?  (
        <h1 className="loading">Loading...</h1>
      ) : searchInput.length > 1  ?  (
        <section className="countries">
          {filtered.map((country) => {
            const { numericCode, name, flag, population, region, capital } =
              country;

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="detailed">
                    <h4 className="country-name">
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      ) : (
        <section className="grid">

          {countries.map((country) => {
            const { numericCode, name, flag, population, region, capital } = country;

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="section">
                    <img src={flag} alt={name} />
                    <section className="detailed">
                      <h4 className="country-name">{name}</h4>
                      <h5>
                        Population: <span>{population.toLocaleString()}</span>{" "}
                      </h5>
                      <h5>
                        Region: <span>{region}</span>{" "}
                      </h5>
                      <h5>
                        Capital: <span>{capital}</span>{" "}
                      </h5>
                    </section>
                    <div className="buttons">
                      <Link to={`/countries/${name}`} className="btn btn-link">
                        Learn More
                      </Link>
                     
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Countries;
