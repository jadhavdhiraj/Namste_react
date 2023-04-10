import { useState,useEffect } from "react";
import { FETCH_RESTAURANT_URL, CORS_API_HOST} from "../config";

const useRestaurant = (resId) =>{

    const [restaurant,setRestaurant] = useState(null)
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        const URL = `${CORS_API_HOST+FETCH_RESTAURANT_URL}`;
        const data = await fetch(URL+resId); 
        const json = await data.json()
        console.log(json.data);
        console.log(json);
        setRestaurant(json.data)

    }

    return restaurant
}
export default useRestaurant;