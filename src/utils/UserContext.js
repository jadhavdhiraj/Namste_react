import { createContext } from "react"

const UserContext = createContext({
    user:{
        name:"name",
        email:"email"
    }
})



export default UserContext