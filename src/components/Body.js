import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


function filterData(searchText){
    return restaurantList.filter(restaurant=>{
        return restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    })
}

const Body = () => {
    const [searchText,setSearchText] = useState("")
    const [restaurant,setRestaurant] =useState(restaurantList)

    useEffect(() =>{
        getRestaurant();
    },[]);


    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return(
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
                const data = filterData(searchText)
                setRestaurant(data)
            }}>Search</button>

        </div>
        
        <div className="restraunt-list">
         {   restaurant.map((restaurant) => {
                return <RestaurantCard {...restaurant.data}  key={restaurant.data.id}/>
            })
        }
        </div>   
        </>
    )
}

export default Body;