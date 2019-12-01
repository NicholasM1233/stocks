import React, { useEffect, useState } from "react";
import  {updateStocksData} from "../components/findStock";


// This component is for the button that updates the stocks currently stored in the StockTracer, which are rendered by the StockList.
const UpdateStockList = ({handleSubmit, stocks}) => {
  const [newStocks, setStocks] = useState([]);

  // The onSubmit which is triggered when the button is clicked. 
  const onSubmit = () => {
    // perform the async request to iextrading API
    (async function() { 
      // the imported "updateStocksData" function returns an updated array of stock information, here it is invoked with the prop stocks from StockTracker
      let updatedStocks = await updateStocksData(stocks);
      // set our local state with the array of updated stocks
      setStocks(updatedStocks);
    })();
    
  };

  // useEffect is triggered when our local state is updated
  useEffect(() => {
    // Run the callback "handleSubmit" sent down as prop from parent StockTracker 
    // Callback sets the parent state with the updatedStocks.
    handleSubmit(newStocks);
  }, [newStocks, handleSubmit]);

  // Component is a button with the onSubmit bound to the onClick. 
  return (
    <div className="ui container">
      <button className ="ui button primary"type="submit" onClick={onSubmit}>
        Update Stocks
      </button>
    </div>
  );
};
export default UpdateStockList;
