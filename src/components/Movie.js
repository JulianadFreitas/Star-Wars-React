
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Movie(){
  const [info, setInfo] = useState(false);
  const { id } = useParams();
  const [character1, setCharacter1] = useState(false);
  const [character2, setCharacter2] = useState(false);
  const [character3, setCharacter3] = useState(false); 

    useEffect(async() => {
      await axios.get(`https:swapi.dev/api/films/${id}`)
      .then((response) => setInfo(response.data))
      .catch((err) => 
        console.error(err));
    }, [id]);

     useEffect( async () => {
      if (info.length !== 0 && info) {
         await axios.get(info.characters[0])
         .then((response) => setCharacter1([response.data.name]))
         .catch(()=>setCharacter1(""));
         await axios.get(info.characters[1])
         .then((response) => setCharacter2([response.data.name]))
         .catch(()=>setCharacter2(""));
          await axios.get(info.characters[2])
         .then((response) => setCharacter3([response.data.name]))
         .catch(()=>setCharacter3(""));
      }
        
  }, [info]);
    return (
<div id="backgroudImage">
    <div className="container">
        <div className="boxApresentation">
            <div className="apresentationMovie">
                <h1>{info.title}</h1>
                <li>Producer: {info.producer}</li>
                <li>Director: {info.producer}</li>
                <li>Characters:  {character1}
                    <br/>
                    {character2}
                    <br/>
                    {character3}</li>

            </div>
        </div>
    </div>
</div>

    );
}


