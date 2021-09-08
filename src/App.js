import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";
import MoviesPage from "./components/MoviesPage.js";
import Movie from "./components/Movie.js";
export default function App() {
    const [findByCharacter, setFindByCharacter] = useState(false);
    const [results, setResults] = useState([]);
    return (<BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home findByCharacter={findByCharacter}
                    setFindByCharacter={setFindByCharacter}
                    results={results}
                    setResults={setResults}/>
            </Route>
            <Route path="/movies" exact>
                <MoviesPage results={results}/>
            </Route>
            <Route path="/movies/:id" exact>
                <Movie/>
            </Route>
        </Switch>
    </BrowserRouter>);
}

