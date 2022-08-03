import  { useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext"
import Navbar from "../../components/navbar/Navbar"


const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <p>User Name:</p>
        <h2>
          {currentUser.displayName}
        </h2>
        </div>
        <div>
          <p>User Email</p>
          <h3>
          {currentUser.email}
          </h3>

        </div>
      </div>
    </div>
  )
}

export default Profile