import React, {useContext} from "react";
import { Link } from "react-router-dom";
import InfoContext from '../contexts/InfoContext';
import Loader from "react-loader-spinner";

export default function MoviesPage() {
  const {findByCharacter, results} = useContext(InfoContext);
  return (
    <div id="backgroudImage"> 
      <div className="container"> {results ? (
        <ul>
          {results.map((item,i) => {
            return (
            <div className="boxMovie" key = {i}>
              <Link to={findByCharacter ? `/people/${item.url.slice(29)}`: `/movie/${item.url.slice(28)}`}> 
                {findByCharacter? item.name : item.title}
              </Link>
            </div>);
            })}
        </ul>) : <Loader type="Bars" color="purple" height={60} width={100} timeout={1000}/>
        } 
      </div>
    </div>);
}

