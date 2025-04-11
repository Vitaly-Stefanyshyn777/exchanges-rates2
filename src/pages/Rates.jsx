import React, { useEffect } from "react";
import { Filter } from "../components/Filter";
import RatesList from "../components/RatesList/RatesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchlatestRates } from "../redux/operation";
import {
  selectFiltereRates,
  selektBaseCurrency,
  selektIsLoading,
} from "../redux/selektor";
import Loader from "../components/Loader/Loader";

export function Rates() {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selektBaseCurrency);
  const filtereRates = useSelector(selectFiltereRates);
  const isLoading = useSelector(selektIsLoading);
  useEffect(() => {
    dispatch(fetchlatestRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <div>
      <Filter />
      {filtereRates.length > 0 && <RatesList rates={filtereRates} />}
      {filtereRates.length === 0 && !isLoading && (
        <p>Не знайшли таку валюту </p>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default Rates;
