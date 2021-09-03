import React, {useState, useContext, useEffect} from "react";
import logo from '../assets/imgs/starwars-logo.png';
import axios from "axios";

export default function Home() {
    const [find, setFind] = useState([]);

    function SearchMovies() {
        const request = axios.get(`https://swapi.dev/api/films/?search=${find}`);
        request.then((response) => {
            console.log(response.data);
        });
    }
    function SearchCharacters() {
        const request = axios.get(`https://swapi.dev/api/people/?search=${find}`)
        request.then((response) => {
            console.log(response.data);
        });
    }
    return (
        <div id="container-imagem"><div className="container">
        <form onSubmit={(e)=> e.preventDefault()}>
            <img className ="img" src={logo} alt="Logo Star Wars" />
            <input onChange ={e => setFind(e.target.value) } className="search-box" type="text" placeholder="Search for movies and characters"></input>
            <div className="buttonContainer">
                <button onClick={() => SearchCharacters(find)} className="btn">People</button>
                <button onClick={() => SearchMovies(find)} className="btn">Movies</button>
            </div>
        </form></div>
        </div> 
    );
}

