import { useEffect, useState } from "react";

const useOnline = () =>{
    const [isOnline,setIsOnline] =useState(true);

    useEffect(()=>{

        const handleOnline = ()=>{
            setIsOnline(true)
            console.log("jjj")
        }
        const handleOffline = ()=>{
            setIsOnline(false)
            console.log("kkk")
        }
        window.addEventListener("online",handleOnline)

        window.addEventListener("offline",handleOffline)


        return()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }
    },[])

    return isOnline;
}
export default useOnline;