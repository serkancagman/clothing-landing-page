import axios from 'axios'


export default function WomenCoatApi(){
    return  axios.create({
        baseURL :"http://localhost:3500",
    });
} 

