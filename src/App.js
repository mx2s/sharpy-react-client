import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import IndexLayout from "./layouts/IndexLayout";
import setUpApiManager from "./utils/api/ApiManager";
import ReactObserver from 'react-event-observer';
import './styles/css/app.css';

window.eventObserver = ReactObserver();

setUpApiManager();
window.apiManager.addService(
    0,
    process.env.REACT_APP_SERVER_HOST,
    process.env.REACT_APP_SERVER_PORT,
);

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
