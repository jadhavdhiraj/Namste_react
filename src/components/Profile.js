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
                userInfo:{
                    login:"",
                    avatar_url:""
                }
            }
        
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/jadhavdhiraj")
        const json = await data.json()
        this.setState({
            userInfo:json
        })
    }
    render(){
        
        return(
            <div>
            <h1>This is {this?.state?.userInfo?.login}</h1>
            <img src={this.state.userInfo.avatar_url} />
           

            </div>
        )
    }
        
    
}
export default Profile