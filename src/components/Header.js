import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png"
import useOnline from "../utils/useOnline";

const Title = () =>(
    <a href="/"><img className="logo" src={Logo} alt="logo"></img>
    </a> 
    )


    
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const isOnline = useOnline();
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>

                </ul>
            </div>

            {isOnline? "🟢":"🔴"}
            {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>) :
             (<button onClick={() =>setIsLoggedIn(true)}><Link to="/login">Login</Link></button>)}
            
            
        </div>
    )
}

export default Header;