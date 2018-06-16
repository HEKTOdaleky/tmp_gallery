import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import Layout from "./containers/Layout/Layout";

class App extends Component {
    render() {
        return (

            <Layout>
                <Routes user={this.props.user} />
            </Layout>
        );
    }
}

export default App;
