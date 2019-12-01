import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex;
  align-items: center;
`;
const HomeButton = styled.div`
  padding: 10px 0;
`;

const Home = () => {
  return (
    <HomeDiv>
      <h2>Track or Lookup Stocks!</h2>
      <HomeButton>
        <Link to="/stocks/list">
          <button className="ui button teal">Track Stocks</button>
        </Link>
      </HomeButton>
      <HomeButton>
        <Link to="/stocks/price">
          <button className="ui button green">Lookup a Stock</button>
        </Link>
      </HomeButton>
    </HomeDiv>
  );
};

export default Home;
