 import React, { useState } from "react";

// const Profile = () => {
//     const[count,setCount] = useState(0)
//     const increment = () =>{
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <h2>Hey im Dhiraj B j..</h2>
//             <button onClick={increment}>Clicked:{count}</button>
//         </div>
//     )
// }
// export default Profile;

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state =
            {
                count:0
            }
        
    }
    render(){
        const {count} = this.state
        return(
            <div>
            <h1>This is devdhij</h1>
            <button onClick={()=>{this.setState({
                count:count+1
            })}}>clicked:{count}</button>
            </div>
        )
    }
        
    
}
export default Profile