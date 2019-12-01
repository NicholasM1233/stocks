import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/stocks/list" className="item">
          Track
        </Link>
        <Link to="/stocks/price" className="item">
          Lookup
        </Link>
      </div>
    </div>
  );
};

export default Header;
