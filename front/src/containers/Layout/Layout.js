import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import './Layout.css';
import Toolbar from "../../components/UI/Toolbar/Toolbar";
import {facebookLogin, logoutUser} from "../../store/actions/users";

const Layout = props => (
    <Fragment>
        <NotificationContainer/>
        <header>
            <Toolbar user={props.user} logout={() => alert("Фигу")} facebook={props.facebookLogin}/>
        </header>
        <main className="container">
            {props.children}
        </main>
    </Fragment>
);

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    facebookLogin: (data) => dispatch(facebookLogin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);