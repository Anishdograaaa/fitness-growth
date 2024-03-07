import axios from "axios";
// import { xrapidapikey } from "../constants";
const baseurl = "https://exercisedb.p.rapidapi.com";
// import {REACT_APP_RAPID_KEY} from '@env'

const apicall = async(url,params)=>{
    try{
        const options = {
            method:'GET',
            url,
            params,
            headers:{
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }
        const response = await axios.request(options);
        return response.data;
    }
    catch(err){
        console.log('error',err.message);
    }
}

export const fetchExercisesByBodyPart = async(bodyPart)=>{
    let data = await apicall(baseurl+`/exercises/bodyPart/${bodyPart}`);
    return data
}
