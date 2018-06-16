import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";



const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props}/> : <Redirect to="/login" />
);

const Routes = ({user}) => (
  <Switch>


  </Switch>
);

export default Routes;