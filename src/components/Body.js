import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


function filterData(searchText){
    return restaurantList.filter(restaurant=>{
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    })
}

const Body = () => {
    const [searchText,setSearchText] = useState("")
    const [restaurant,setRestaurant] =useState(restaurantList)
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