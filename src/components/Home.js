import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import logo from '../assets/imgs/starwars-logo.png';
import axios from "axios";
import styled from "styled-components";
import { FcSearch } from 'react-icons/fc';
import Search from "./Search";
export default function Home({findByCharacter, setFindByCharacter, results, setResults}) {
    let history = useHistory();
    console.log(findByCharacter)
    function showMovies(){
    results.length > 0 ? history.push("/movies") : history.push("/")
    }

    return (
        <div id="container-imagem">
        <div className="container">
        <form onSubmit={(e)=> e.preventDefault()}>
            <img className ="img" src={logo} alt="Logo Star Wars" />
            <input onChange ={async (e) =>  { e.target.value.length > 1  ? setResults(await Search(findByCharacter, e.target.value)) : setResults([]); console.log(results)}} 
            className="search-box" type="text" placeholder="Search for movies or characters"></input>
            <div className="buttonContainer">
                <button onClick={() => { setFindByCharacter(true);   showMovies() ;console.log(results) }} className="btn">People <SearchIcon /></button>
                <button onClick={() => { setFindByCharacter(false);  showMovies() ;console.log(results);}} className="btn">Movies <SearchIcon /></button>
            </div>
        </form>
        </div>
        </div>

    );
}
const SearchIcon = styled(FcSearch)`
  font-size: 30px;
  cursor: pointer;
  margin-left: 5px;
`;
