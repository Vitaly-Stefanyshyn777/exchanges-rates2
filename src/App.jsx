import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Rates from "./pages/Rates";
import Navigation from "./components/Navigation/Navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBaseCurrency } from "./redux/operation";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      timeout: 5000,
      maximumAge: 0,
    };
    const success = (pos) => {
      dispatch(fetchBaseCurrency(pos.coords));
    };

    const error = () => {
      dispatch();
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
    </>
  );
}

export default App;
