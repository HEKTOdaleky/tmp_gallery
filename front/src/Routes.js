import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AddPhoto from "./containers/AddPhoto/AddPhoto";
import MainMenu from "./containers/MainMenu/MainMenu";



const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props}/> : <Redirect to="/login" />
);

const Routes = ({user}) => (
  <Switch>
      <Route path="/" exact component={MainMenu}/>
      <Route path="/add" exact component={AddPhoto}/>

  </Switch>
);

export default Routes;