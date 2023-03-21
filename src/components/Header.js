import { useState,useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";



const Title = () =>(
    <a href="/"><img className="h-24 ml-3 pb-3 hover:scale-105" src={Logo} alt="logo"></img>
    </a> 
    )


    
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const {user} = useContext(UserContext)

    const cartItems = useSelector(store=>store.cart.items)
    return (
        <div className="flex justify-between bg-orange-100 shadow sticky top-0 left-0 w-full h-[70px] z-50">
            <Title/>
            
                <ul className="flex max-w-2xl items-center justify-between mt-2 mr-2.5">
                    <li className="p-3 hover:bg-orange-300 rounded-2xl"><Link to="/">Home</Link></li>
                    <li className="p-3 hover:bg-orange-300 rounded-2xl"><Link to="/about">About</Link></li>
                    <li className="p-3 hover:bg-orange-300 rounded-2xl"><Link to="/contact">Contact</Link></li>
                    <li className="p-3 hover:bg-orange-300 rounded-2xl"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    <li className="p-3 hover:bg-orange-300 rounded-2xl"><Link to="/instamart">Instamart</Link></li>
                    <li className="p-3 hover:bg-orange-300 rounded-2xl">{user.name}</li>
                    
                    <li className="p-3">{isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)} >Logout</button>) :
             (<button onClick={() =>setIsLoggedIn(true)}><Link to="/login">Login</Link>
             <span className={isOnline ? "text-green-600" : "text-red-600" }>●</span>
             </button>)}</li>
                </ul>


         

            

            
             
            
        </div>
    )
}

export default Header;