// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("VND");
  const [toCurrency, setToCurrency] = useState("USD");
  // eslint-disable-next-line no-unused-vars
  const [exchangeRate, setExchangeRate] = useState({
    VND: { USD: 1 / 23150, EUR: 1 / 27150, JPY: 1 / 212.2 },
    USD: { VND: 23150, EUR: 0.896, JPY: 110.9 },
    EUR: { VND: 27150, USD: 1.116, JPY: 124.7 },
    JPY: { VND: 212.2, USD: 1 / 110.9, EUR: 1 / 124.7 },
  });
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (exchangeRate[fromCurrency] && exchangeRate[fromCurrency][toCurrency]) {
      setResult(amount * exchangeRate[fromCurrency][toCurrency]);
    } else {
      setResult(0);
    }
  };

  return (
    <div className="currency-converter">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from-currency">From</label>
          <select
            className="from-currency"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="VND">VND</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to-currency">To</label>
          <select
            className="to-currency"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            <option value="VND">VND</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            className="amount"
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button className="btconvert" type="submit">
          Convert
        </button>
        <button
          className="btclick"
          type="btclick"
          onClick={handleSwapCurrencies}
        >
          Swap Currencies
        </button>
      </form>
      <div className="result">
        {result > 0 ? result.toFixed(2) : "Invalid conversion"}
      </div>
    </div>
  );
};

export default CurrencyConverter;