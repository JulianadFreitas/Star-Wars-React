import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";
import MoviesPage from "./components/MoviesPage.js";
import Movie from "./components/Movie.js";
import InfoContext from './contexts/InfoContext.js';

export default function App() {
  const [findByCharacter, setFindByCharacter] = useState(false);
  const [results, setResults] = useState([]);
    
return (
    <InfoContext.Provider value={{ findByCharacter, setFindByCharacter, results, setResults }}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/movies" exact>
                    <MoviesPage/>
                </Route>
                <Route path="/movie/:id/" exact>
                    <Movie/>
                </Route>
            </Switch>
        </BrowserRouter>
    </InfoContext.Provider>);
}


