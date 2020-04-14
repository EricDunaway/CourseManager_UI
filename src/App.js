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
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </Router>
    </>
)