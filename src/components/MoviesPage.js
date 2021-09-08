import React, {useContext} from "react";
import { Link } from "react-router-dom";
import InfoContext from '../contexts/InfoContext';

export default function MoviesPage() {
  const {findByCharacter, results} = useContext(InfoContext);
  return (
    <div id="backgroudImage">
        <div className="container">
           <ul>
             {results.map((item,i) => {
             return (
               <div className="boxMovie" key = {i}>
                  <Link to={findByCharacter ? `/people/${item.url.slice(29)}`: `/movie/${item.url.slice(28)}`}> 
                        {findByCharacter? item.name : item.title}
                  </Link>
               </div>);
             })}
           </ul>
        </div>
    </div>);
}

