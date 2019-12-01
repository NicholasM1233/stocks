import React from "react";
import uniqid from "uniqid";
import styled from "styled-components";

// styling from styled-components
const ListOfStocks = styled.div`
  display: flex; 
  flex-flow: column nowrap; 
  justify-content: center;
 
`

// The StockList component which receives an array of Stocks to render from parent StockTracker
const StockList = ({ stocks }) => {
  return (
    <ListOfStocks>
      <div className="ui list">
      {/* For all of the stocks sent down by our parent, render a list item with the company name, and the latestPrice --> */}
        {stocks.map(stock => (
          <div className="item" key={uniqid()}>
            <div className="header">{stock.companyName}</div>$
            {stock.latestPrice}
          </div>
        ))}
      </div>
    </ListOfStocks>
  );
};

export default StockList;

