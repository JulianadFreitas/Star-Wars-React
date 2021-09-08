
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Movie(){
  const [info, setInfo] = useState(false);
  const { id } = useParams();
  const [character1, setCharacter1] = useState(false);
  const [character2, setCharacter2] = useState(false);
  const [character3, setCharacter3] = useState(false); 

    useEffect(() => {
      const request = axios.get(`https:swapi.dev/api/films/${id}`);
      request.then((response) => setInfo(response.data))
      request.catch(() => setInfo("Error"));
    }, [id]);

    useEffect(() => {
      if (info.length !== 0 && info) {
         axios.get(info.characters[0])
         .then((response) => setCharacter1([response.data.name]))
         .catch(()=>setCharacter1(""));
          axios.get(info.characters[1])
         .then((response) => setCharacter2([response.data.name]))
         .catch(()=>setCharacter2(""));
          axios.get(info.characters[2])
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
          <h2>{character1}</h2>
        </div></div></div></div>
    );
}


