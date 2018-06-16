import React from 'react';
import {Button} from "react-bootstrap";
import config from '../../../../config';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const AnonymousMenu = props => {

    return (
        <div>
            <FacebookLogin
                appId={config.facebookAppId}
                fields="name,email,picture"
                callback={props.facebook}
                render={renderProps => (

                    <Button onClick={renderProps.onClick}>
                        Sign in with Facebook
                    </Button>
                )}/>
        </div>
    )
};

export default AnonymousMenu;