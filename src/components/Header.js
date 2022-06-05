import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const changeTheme = () => {


    const moon = document.querySelector(".btn-change");
    const header = document.querySelector(".header");
  
    const details = document.querySelectorAll(".detailed");
    const uls = document.querySelectorAll("ul");

    moon.addEventListener("click", () =>   {
      document.body.classList.toggle("light-theme");

      header.classList.toggle("light-theme");
      

      details.forEach((detail) => {
        detail.classList.toggle("light-theme");
      });
      uls.forEach((ul) => {
        ul.classList.toggle("light-theme");
      });
    });
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <button className="btn btn-change" onClick={() => changeTheme()}>
            <FontAwesomeIcon icon={faMoon} /> Dark mode
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
