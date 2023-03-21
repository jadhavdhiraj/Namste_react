import { useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice"
import store from "../utils/store";
import FoodItem from "./FoodItem";




const Cart = () =>{

    const items = useSelector((store)=>store.cart.items) 
    return(
        <div>
            <h1 className="font-bold">Cart Items</h1>
            {items.map((item)=><FoodItem key={item.id} {...item}/>)}
            
        </div>
    )
}
export default Cart;