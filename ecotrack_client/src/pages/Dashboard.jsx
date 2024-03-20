import { useContext } from "react"
import { UserContext } from "../../context/userContext"

//firstName not displaying for some reason but email does ...
export default function Dashboard() {
    const {user} = useContext(UserContext) //access user from any page
  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h1>Welcome {user.firstName}! </h1>)} 
    </div>
  )
}
