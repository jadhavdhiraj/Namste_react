import { useState } from "react";

const Contact = () => {
    const [count, setCount]=useState(0)

    async function callApi(){
        console.log("api called"+count)
    }
    const increament = () =>{
        setCount(count+1)
    }
    return(
        <div>
        <h1>This IS Contact us page</h1>
        <button onClick={()=>{
            increament();
            callApi()
        }}>count:{count}</button>
        </div>
    )
}

export default Contact;