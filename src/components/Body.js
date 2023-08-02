import { useContext, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { CORS_API_HOST, restaurantList, SWIGGY_API_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import resList from "../utils/mockData";





const Body = () => {
    const [searchText,setSearchText] = useState("")
    const [filterdRestaurant,setFilterdRestaurant] =useState([])
    const [allRestaurant,setAllRestaurant] =useState([])
    const {user,setUser} = useContext(UserContext);

    useEffect(() =>{
        getRestaurant();
    },[]);
   

    async function getRestaurant(){
       // const URL = `${CORS_API_HOST+SWIGGY_API_URL}`;
        const data = await fetch(SWIGGY_API_URL)
        const json = await data.json()
        
console.log(json)

       setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("this is" +json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


      
    }

    const isOnline = useOnline()

    if(!isOnline) return(<h1>check your internet connection please</h1>)

    if(!allRestaurant) return <Shimmer/> ;

    return (
        <div className="">
        <div className="ml-96 p-8">
            <input 
            type="text"
            className="border-2 border-orange-300 rounded-lg p-2 focus:border-orange-500"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                
                setSearchText(e.target.value);
            }}
            ></input>
            <button className="hover:bg-orange-400 rounded-xl p-2 ml-10 bg-orange-200" onClick={()=>{
                const data = filterData(searchText,allRestaurant)
                setFilterdRestaurant(data)
            }}>Search</button>

            <input className="ml-10" value={user.name} onChange={e => setUser({
                ...user,
                name:e.target.value
            })}
            ></input>
             <input value={user.email} onChange={e => setUser({
                ...user,
                email:e.target.value
            })}
            ></input>
           

        </div>
        {/* <Shimmer /> */}
        
        {(allRestaurant?.length==0) ? <Shimmer/> : <div className="flex flex-wrap gap-5 justify-evenly mx-20">
            
            {   (filterdRestaurant.length == 0) ? <h1>Not Found</h1> : filterdRestaurant.map((restaurant) => {
                return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
            })
        }
            </div>}   
        </div>
    )
}

export default Body;