
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Movie(){
  const [info, setInfo] = useState(false);
  const { id } = useParams();
  const [character1, setCharacter1] = useState(false);
  const [character2, setCharacter2] = useState(false);
  const [character3, setCharacter3] = useState(false); 

  useEffect(() => {
     axios.get(`https:swapi.dev/api/films/${id}`)
    .then((response) => setInfo(response.data))
    .catch((err) => 
      console.error(err));
    }, [id]);
  //console.log(info.characters[0]);
  useEffect(() => {
    if(info){
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
          {character3 ? (
            <div className="textBox">
              <h1>{info.title}</h1>
              <li>Producer: {info.producer}</li>
              <li>Director: {info.director}</li>
              <li>Characters:  {character1}, {character2}, {character3}</li>
              <li>Episode:  {info.episode_id}</li>
            </div>) 
                : <Loader type="Bars" color="purple" height={60} width={80} timeout={1000}/>
             } 
        </div>
      </div>
    </div>
);
}


