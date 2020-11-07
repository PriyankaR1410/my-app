import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route
} from "react-router-dom";

// componets
import Dashboard from "../containers/dash-board";
import Viewproducts from "../containers/view-products";
import Header from "../components/header";
import Buy from "../pages/buy";
import Commercial from "../pages/commercial";
import Apartments from "../pages/apartments";

const Routes = () => {
    return (
      <Router history={useHistory}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/viewproducts" component={Viewproducts} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/buy" component={Buy}/>
          <Route exact path="/commercial" component={Commercial}/>
          <Route exact path="/apartments" component={Apartments}/>
        </Switch>
      </Router>
    );
  };

  export default Routes;