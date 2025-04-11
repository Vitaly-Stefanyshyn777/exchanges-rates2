export default function RatesList({ rates }) {
  return (
    <div>
      <ul>
        {rates.map(([currency, rate]) => {
          return (
            <li key={currency}>
              {currency}
              {rate}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
