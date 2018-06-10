import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import IndexLayout from "./layouts/IndexLayout";
import './styles/css/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={IndexLayout}/>
                </Switch>
            </div>
        );
    }
}

export default App;
