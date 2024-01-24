import axios from "axios"
const BASE_URL = "https://api.themoviedb.org/3/"; 
const API_KEY_PARAM = "?api_key=bbf7b1ab3a88d20e9fd8ea2b1532fa3b";

export class TVShowAPI{
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log("***",response.data.results);
        return response.data.results;
    }
}