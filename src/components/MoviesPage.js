import React, {useContext} from "react";
import MovieBox from "./MovieBox";
import InfoContext from '../contexts/InfoContext.js';

export default function MoviesPage() {
    const {findByCharacter, results} = useContext(InfoContext);
    console.log(findByCharacter, results[0].url, "deeeeu")
    return (<div id="backgroudImage">
        <div className="container">
            <ul> {
                results.map((item, i) => {
                    console.log(item, "aqui")
                    return (<div className="boxMovie" key ={i}>
                        <MovieBox item = {item}/>
                    </div>)
                })
            } </ul>
        </div>
    </div>);
}

