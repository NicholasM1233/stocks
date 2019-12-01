import React from "react";
import styled from "styled-components";

const StockSymbol = styled.h3``;

const StockPrice = styled.h4`
  color: green;
`;

const StockDisplay = ({ stock }) => {
  if (stock.length === 0) {
    return (
      <div>
        <StockSymbol>Stock:</StockSymbol>
        <StockPrice>Share Price:</StockPrice>
      </div>
    );
  }

  return (
    <div className="">
      <div>
        <StockSymbol>Stock: {stock.companyName}</StockSymbol>
        <StockPrice>
          Share Price: <strong>${stock.latestPrice}</strong>
        </StockPrice>
      </div>
    </div>
  );
};

export default StockDisplay;
