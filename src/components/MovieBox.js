 import React, {useContext} from "react";
 import { Link } from "react-router-dom";
 import InfoContext from '../contexts/InfoContext';

 export default function MovieBox({item}) {
 const {findByCharacter} = useContext(InfoContext);
 console.log("opa", findByCharacter,item.url )
     return (
      <>
          <div className="boxMovie">
              <Link to={findByCharacter
                   ? `people/${item.url.slice(29)}`
                   : `movies/${item.url.slice(28)}`}> 
             {findByCharacter? item.name : item.title}
             </Link> 
          </div>
       </>
 
     );
 }

