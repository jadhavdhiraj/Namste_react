import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config"
import { removeItem } from "../utils/cartSlice";



const FoodItem = ({name,category,description,imageId,inStock,price}) =>{

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(removeItem())
    }

       
        return (
            <div className=" p-10 m-20 shadow-lg hover:animate-none hover:scale-105  bg-orange-50 flex justify-between">
                <div className="m-10">
                <h1 className="text-xl font-semibold">{name}</h1>
                <h3 className="text-lg font-medium">₹{price/100}</h3>
                </div>
                <div>
                <img className="h-40 w-40" src={ IMG_CDN_URL+
                imageId}></img>
                <button
                    className="bg-green-600 m-5 p-2 rounded-lg"
                    onClick={() => handleClick()}
                  >
                    Remove
                  </button>

                  </div>
                
                
                {/* <h4>{description}</h4> */}
            </div>
            
        )
    
}
export default FoodItem;