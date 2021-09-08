  import React, {useContext} from "react";
  import { Link } from "react-router-dom";
  import InfoContext from '../contexts/InfoContext';

  export default function MovieBox() {
  const {findByCharacter, results} = useContext(InfoContext);
  console.log("Item",results);
      return (
          <>   {
               results.map((item) => {
                return (
                <div className="boxMovie">
                  <Link to={findByCharacter
                    ? `/people/${item.url.slice(29)}`
                    : `/movie/${item.url.slice(28)}`}> 
                      {findByCharacter? item.name : item.title}
                  </Link></div>);})}
          </>);
  }

