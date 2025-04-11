export function ExchangeInfo({ exchangeInfo }) {
  return (
    <div>
      {exchangeInfo.amout} {exchangeInfo.from} {exchangeInfo.result}{" "}
      {exchangeInfo.to}
    </div>
  );
}

export default ExchangeInfo;
