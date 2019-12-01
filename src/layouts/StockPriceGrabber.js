import React, { useState, useCallback} from "react";
import StockFinder from "../components/StockFinder";
import StockDisplay from "../components/StockDisplay";
import styled from "styled-components";

// Steps to get the stock display functioning.

//1: Establish a state.
//2: Pass the state up to StockPriceGrabber utilizing a callback
//3: Send that data down to the stock display as a prop.
//4: Map over the data in the display function.

const PriceGrabberDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 25px;
`;

const StyledIcon = styled.div`
  color: green;
  padding-bottom: 10px;
`;
const PriceGrabCard = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);

  width: 600px;
`;

const CardTop = styled.div`
  background-color: hsl(220, 12%, 95%);
  border-top: 3px solid green;
  padding: 3% 3%;
`;
const CardBottom = styled.div`
  padding: 3% 3%;
`;


// The StockPriceGrabber component is responsible for allowing a user to find the price of a stock given a stock symbol
const StockPriceGrabber = () => {
  // the local state consisting of a single stock object within an arrat
  const [stockState, setStockData] = useState([]);


  // The callback passed down to the StockFinder component sets our local state with a fetched Stock from IEXTrading
  const handleChangeCallback  = useCallback(stock => setStockData(stock), []);

  return (
    <PriceGrabberDiv className="container">
      <h2>Lookup stocks by their unique symbols!</h2>
      <StyledIcon>
        <i className="fad fa-badge-dollar fa-4x"></i>
      </StyledIcon>
      <PriceGrabCard>
        <CardTop>
          {/* The StockDisplay components single purpose is to display the stock passed down as a prop */}
          <StockDisplay stock={stockState} />
        </CardTop>
        <CardBottom>
          {/* The StockFinder components single purpose is to fetch a stock given a symbol and invoke the callback with the API response */}
          <StockFinder handleChange={handleChangeCallback} />
        </CardBottom>
      </PriceGrabCard>
    </PriceGrabberDiv>
  );
};

export default StockPriceGrabber;
