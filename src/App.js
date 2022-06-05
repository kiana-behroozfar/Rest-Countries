import React from "react";
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Country from "./components/Country";
// import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
        
      </Routes>
    </>
  );
}

export default App;
