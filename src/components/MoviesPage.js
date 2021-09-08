import React, {useContext} from "react";
import { Link } from "react-router-dom";

import InfoContext from '../contexts/InfoContext.js';
import MovieBox from "./MovieBox";


export default function MoviesPage() {
    const {findByCharacter, results} = useContext(InfoContext);
    console.log(findByCharacter, results[0].url, "deeeeu")
    
   return (
    <div id="backgroudImage">
        <div className="container">
           <ul>
                <MovieBox />
            </ul>
        </div>
    </div>);
}

