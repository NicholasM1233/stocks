import React, { useState, useEffect } from "react";
import StockForm from "./StockForm";
import { fetchStockData } from "../components/findStock";
// the StockFinder component responsible for accepting a stockCode and rendering the price of the stock to the screen.

const StockFinder = ({ handleChange, buttonText }) => {
  const [stockCode, setStockCode] = useState(null);

  // the handleSubmit callback passed down to the StockForm as a prop. Passes the stockCode from the StockForm to local state.
  const handleSubmit = newCode => {
    setStockCode(newCode);
  };

  // Whenever a stockCode is set
  useEffect(() => {
    // conditional if there is no stockCode do nothing.
    if (!stockCode) {
      return;
    }
    // if there is a stock code, 
    (async function() {
      //fetch the stock object using the stockCode
      let fetchedStockData = await fetchStockData(stockCode);
      // invoke the parent handleChange callback with the fetched stock object
      handleChange(fetchedStockData);
    })();
  }, [stockCode]);

  return (
    <div>
      <StockForm
        onSubmit={handleSubmit}
        placeholder="Stock Code"
        errorMessage="You must provide a stock code to begin tracking!"
        errorHeader="No Stock Code Provided"
        buttonText={buttonText}
      />
    </div>
  );
};
export default StockFinder;
