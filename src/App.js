import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";
export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                   <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

