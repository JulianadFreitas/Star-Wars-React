import React, {useState} from "react";
import logo from '../assets/imgs/starwars-logo.png';
import axios from "axios";
import styled from "styled-components";
import { FcSearch } from 'react-icons/fc' ;

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
        <div id="container-imagem">
        <div className="container">
        <form onSubmit={(e)=> e.preventDefault()}>
            <img className ="img" src={logo} alt="Logo Star Wars" />
            <input onChange ={e => setFind(e.target.value) } className="search-box" type="text" placeholder="Search for movies and characters"></input>
            <div className="buttonContainer">
                <button onClick={() => SearchCharacters(find)} className="btn">People <SearchIcon /></button>
                <button onClick={() => SearchMovies(find)} className="btn">Movies <SearchIcon /></button>
            </div>
        </form></div>
        </div> 
    );
}

const SearchIcon = styled(FcSearch)`
  font-size: 30px;
  cursor: pointer;
  margin-left: 5px;
`;
