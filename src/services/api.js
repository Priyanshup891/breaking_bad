import axios from "axios";

const API_URL = `https://breakingbadapi.com/api/characters`;

export const fetchData =async (Text) => {
    try{
        return await axios.get(`${API_URL}?name=${Text}`);
    } catch(error){
        console.log("Error while fetching data", error);
    }
}