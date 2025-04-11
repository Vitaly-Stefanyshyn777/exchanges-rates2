import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selektBaseCurrency } from "../../redux/selektor";

function Navigation() {
  const baseCurrency = useSelector(selektBaseCurrency);
  console.log(baseCurrency);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/rates">Rates</NavLink>
      {baseCurrency && <h2>твоя поточна валюта{baseCurrency}</h2>}
    </div>
  );
}

export default Navigation;
