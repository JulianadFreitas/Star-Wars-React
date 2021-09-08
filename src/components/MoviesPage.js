import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import Movie from "./Movie"
export default function MoviesPage({results}) {

//const { id } = useParams();
// useEffect(() => {
//     const request = axios.get(`https://swapi.dev/api/films/${id}`)
//     request.then((response) => setMovies(response.data))
//     request.catch(() => setMovies("Error"));
//   }, [])
console.log(results, results[0].title,"aqui :D")
    return (
        <div className="movieContainer">{
            results.map((item) => {
            return(<Movie data = {item}/>)})} {results[0].title} oi
         <h1 className="title"> 
         </h1>
        </div> 
    );
}


