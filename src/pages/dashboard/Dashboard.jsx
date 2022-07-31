import Navbar from '../../components/navbar/Navbar';
import Trends from '../../components/trends/Trends';
import BlogForm from '../../components/blogform/BlogForm';
import { toastSuccessNotify,toastWarnNotify } from '../../helpers/toastNotify';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Div } from "./Dashboard.style";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  // {currentUser ? (
  //       toastSuccessNotify('Login Successfully')
  //     ):(
  //     toastWarnNotify('Logout')
  //     )}
  return (
    <div>
      <Navbar />
      <Div>
        <BlogForm/>
        <Trends />
      </Div>
    </div>
  )
}

export default Dashboard