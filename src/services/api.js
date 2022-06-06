import axios from "axios";

const API_URL = `https://breakingbadapi.com/api/characters`;

export const fetchData =async () => {
    try{
        return await axios.get(API_URL);
    } catch(error){
        console.log("Error while fetching data", error);
    }
}