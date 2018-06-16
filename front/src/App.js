import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";

class App extends Component {
    render() {
        return (

                <Routes user={this.props.user} />
        );
    }
}

export default App;
