import { createContext } from "react"

const userContext = createContext({
    user:{
        name:"name",
        email:"email"
    }
})



export default userContext