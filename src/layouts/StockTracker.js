import React, { useState, useCallback } from "react";
import StockFinder from "../components/StockFinder";
import StockList from "../components/StockList";
import UpdateStockList from "../components/UpdateStockList";

// The StockTracker component is responsible for allowing a user to add a stock from IexTracking to a displayed UL, and update the stocks within the UL
// to the latest price information.

const StockTracker = () => {
  // The local state comprising of an Array of Stocks
  const [stockList, setStockList] = useState([]);

  // The Callback passed down to the StockFinder component adds a grabbed stock to the end of the stockList array.
  const handleChangeCallback = useCallback(
    stock => setStockList([...stockList, stock]),
    [stockList]
  );

  // The Callback passed down to the UpdateStockList component replaces the current array of stocks with the updated stocks.
  const handleSubmitCallback = useCallback(stocks => setStockList(stocks), []);

  return (
    <div>
      <h2>Track stocks by their unique symbols!</h2>
      {/* The StockList components single purpose is to display the list of stocks we send down as a prop */}
      <StockList stocks={stockList} />
      {/* The StockFinder components single purpose is to fetch a stock given a symbol and invoke the callback with the API response */}
      <StockFinder
        handleChange={handleChangeCallback}
        buttonText="Add Stock to List"
      />
      {/* The UpdateStockList components single purpose is to re-fetch all of the stocks when given an array of stocks, and be invoke the callback with the updated stocks */}
      <UpdateStockList stocks={stockList} handleSubmit={handleSubmitCallback} />
    </div>
  );
};

export default StockTracker;
