import React from 'react';
import { Route, Switch} from "react-router-dom";
import AddPhoto from "./containers/AddPhoto/AddPhoto";
import MainMenu from "./containers/MainMenu/MainMenu";
import Profile from "./containers/Profile/Profile";



const Routes = ({user}) => (
    <Switch>
        <Route path="/" exact component={MainMenu}/>
        <Route path="/users" exact component={Profile}/>

        <Route path="/add" exact component={AddPhoto}/>
        <Route render={() => <h1>Not found</h1>}/>

    </Switch>
);

export default Routes;