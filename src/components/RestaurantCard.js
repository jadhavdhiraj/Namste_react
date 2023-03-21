import { IMG_CDN_URL } from "../config"
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString}) => {
   
    return (
        <div className="w-56 p-2 m-2 shadow-lg hover:animate-none hover:scale-105  bg-orange-50">
            <img src={ IMG_CDN_URL+
            cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
        
    )
}
export default RestaurantCard