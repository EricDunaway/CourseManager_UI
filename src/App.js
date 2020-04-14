import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from './pages/Main';


export default () => (
    <>
    <CssBaseline />
    <Router>
        <Switch>
            {/* <Route path="/about">
                <Main />
            </Route>
            <Route path="/users">
                <Users />
            </Route> */}
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </Router>
    </>
)