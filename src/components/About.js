import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";

// const About = () =>{
//     return(
//         <>
//         <h1>This is about us page</h1>
//         <h2>My self a devdhi__</h2>
//         <Outlet/>
//         </>
//     )
// }
// export default About;

class About extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <div className="container block">
                <h1>This is about us page</h1>
                <h2>My self devdhi__</h2>
                <Profile/>
            </div>
        )
    }
    
}
export default About;