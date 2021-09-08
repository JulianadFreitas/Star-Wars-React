
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Movie(){
  const [info, setInfo] = useState(false);
  const { id } = useParams();
   useEffect(() => {
     const request = axios.get(`https:swapi.dev/api/films/${id}`)
     request.then((response) => setInfo(response.data))
     request.catch(() => setInfo("Error"));
   }, [id])
   console.log(info,"aquiiiiiiiiiiiiiii")
    return (
        <div>
        <div>
         TESTE
        </div> 
        </div>
    );
}


