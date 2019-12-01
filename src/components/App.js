import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StockPriceGrabber from "../layouts/StockPriceGrabber";
import StockTracker from "../layouts/StockTracker";
import Header from "../layouts/Header";
import Home from "../layouts/Home";

import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/stocks/price" exact component={StockPriceGrabber} />
            <Route path="/stocks/list" exact component={StockTracker} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
