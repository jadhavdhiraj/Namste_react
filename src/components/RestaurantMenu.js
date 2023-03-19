
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant"
import { useState } from "react";






const RestaurantMenu = () => {
    const { resId } = useParams()
    const [text,setTet] = useState("test")
   
    const restaurant= useRestaurant(resId);


    const dispatch = useDispatch()
    const handleClick = (name) =>{
        dispatch(addItem(name))
    }
    const handleRemove = ()=>{
        dispatch(removeItem())
    }
    
    return (!restaurant)?<Shimmer/>:(
        <div>
            <div>
            <h1>{restaurant?.cards?.[0].card?.card?.info?.name}</h1>
            <img src={IMG_CDN_URL + restaurant?.cards?.[0].card?.card?.info?.cloudinaryImageId } />
            <button onClick={()=>handleClick()}>addItem</button>
            <button onClick={()=>handleRemove()}>removeItem</button>
            {/* <h1>Restaurant id:{resId}</h1>                        
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="menu"/>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.areaName}</h3> */}
            <h3>{restaurant?.cards?.[0].card?.card?.info?.avgRating} stars</h3>
            {/* <h3>{restaurant?.avgRating} stars</h3> */}
            <button onClick={()=>{setTet("change")}}>click:{text}</button>
            <h3>{restaurant?.cards?.[0].card?.card?.info?.costForTwoMessage}</h3>
            {/* <h3>{restaurant?.costForTwoMessage}</h3> */}
            </div>
            <div>
                <ul>
               {restaurant?.cards?.[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card?.card?.itemCards?.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name} - <button onClick={()=>handleClick(item?.card?.info?.name)}>addItem</button></li>))}
                {/* {Object.values(restaurant?.menu?.items).map((item)=>(<li key={item.id}>{item.name}</li>))}
                {console.log(restaurant?.menu?.items)} */}
                </ul>
                
                
            </div>
        </div>
    )
}
export default RestaurantMenu;
