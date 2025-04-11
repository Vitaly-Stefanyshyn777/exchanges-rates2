import React from "react";
import { useDispatch } from "react-redux";
import { fetchExchangeCurrency } from "../redux/operation";

function Form() {
  const dispatch = useDispatch();
  const handelSumbit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.currency;
    const [amount, from, , to] = value.split(" ");
    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };
  return (
    <form onSubmit={handelSumbit}>
      <input
        type="text"
        name="currency"
        placeholder="15 USD in UAH"
        pattern="^\s*\d+(\.\d+)?\s+[A-Za-z]{3}\s+in\s+[A-Za-z]{3}\s*$"
        id=""
        title="Формат: число + 3-літерний код валюти + 'in' + 3-літерний код валюти (Наприклад: '15 USD in UAH')"
      />
    </form>
  );
}

export default Form;
