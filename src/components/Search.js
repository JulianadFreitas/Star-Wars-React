import axios from "axios";

export default function Search(findByCharacter, input) {
    return axios.get(`https://swapi.dev/api/${
        findByCharacter ? 'people' : 'films'}/?search=${input}`)
        .then((response) =>
        response.data.results)
        .catch((err) => 
        console.error(err));
}
