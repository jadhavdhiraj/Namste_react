import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";




const Body = () => {
    const [searchText,setSearchText] = useState("")
    const [filterdRestaurant,setFilterdRestaurant] =useState([])
    const [allRestaurant,setAllRestaurant] =useState([])

    useEffect(() =>{
        getRestaurant();
    },[]);
   console.log(useState())

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilterdRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline()

    if(!isOnline) return(<h1>check your internet connection please</h1>)

    if(!allRestaurant) return null;

    return (allRestaurant?.length==0) ? <Shimmer/> : (
        <>
        <div className="search-container">
            <input 
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                
                setSearchText(e.target.value);
            }}
            ></input>
            <button className="search-btn" onClick={()=>{
                const data = filterData(searchText,allRestaurant)
                setFilterdRestaurant(data)
            }}>Search</button>

        </div>
        {/* <Shimmer /> */}

        <div className="restraunt-list">
            
            {   (filterdRestaurant.length == 0) ? <h1>Not Found</h1> : filterdRestaurant.map((restaurant) => {
                return <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data}  /></Link>
            })
        }
        </div>   
        </>
    )
}

export default Body;