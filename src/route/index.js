import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route
} from "react-router-dom";

// componets
import Dashboard from "../containers/dash-board";
import Header from "../components/header";
import Rent from "../pages/rent";
import Sale from "../pages/sale";

const Routes = () => {
    return (
      <Router history={useHistory}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/rent" component={Rent}/>
          <Route exact path="/sale" component={Sale}/>
        </Switch>
      </Router>
    );
  };

  export default Routes;