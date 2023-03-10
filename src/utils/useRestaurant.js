import { useState,useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../config";

const useRestaurant = (resId) =>{

    const [restaurant,setRestaurant] = useState(null)
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        const data = await fetch(FETCH_RESTAURANT_URL+resId); 
        const json = await data.json()
        console.log(json.data);
        console.log(json);
        setRestaurant(json.data)

    }

    return restaurant
}
export default useRestaurant; 