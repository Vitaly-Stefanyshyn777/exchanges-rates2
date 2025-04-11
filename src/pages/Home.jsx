import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import {
  selektExchangeInfo,
  selektIsError,
  selektIsLoading,
} from "../redux/selektor";
import ExchangeInfo from "../components/ExchangeInfo";
import Loader from "../components/Loader/Loader";

export function Home() {
  const exchangeInfo = useSelector(selektExchangeInfo);
  const isLoading = useSelector(selektIsLoading);
  const isError = useSelector(selektIsError);
  return (
    <div>
      <Form />
      {isError && <p style={{ color: "red" }}> Помилка </p>}
      {isLoading && <Loader />}
      {exchangeInfo && <ExchangeInfo exchangeInfo={exchangeInfo} />}
    </div>
  );
}

export default Home;
