import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams()
    const [restaurant,setRestaurant] = useState(null)
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+id); 
        const json = await data.json()
        console.log(json.data);
        console.log(json);
        setRestaurant(json.data)

    }
    
    return (!restaurant)?<Shimmer/>:(
        <div>
            <div>
            <h1>Restaurant id:{id}</h1>                        
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="menu"/>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.areaName}</h3>
            {/* <h3>{restaurant?.cards?.[0].card?.card?.info?.avgRating} stars</h3> */}
            <h3>{restaurant?.avgRating} stars</h3>

            {/* <h3>{restaurant?.cards?.[0].card?.card?.info?.costForTwoMessage}</h3> */}
            <h3>{restaurant?.costForTwoMessage}</h3>
            </div>
            <div>
                <ul>
               {/* {restaurant?.cards?.[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card?.card?.itemCards?.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>))} */}
                {Object.values(restaurant?.menu?.items).map((item)=>(<li key={item.id}>{item.name}</li>))}
                {console.log(restaurant?.menu?.items)}
                </ul>
                
                
            </div>
        </div>
    )
}
export default RestaurantMenu;
