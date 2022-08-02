import Navbar from '../../components/navbar/Navbar';
import Trends from '../../components/trends/Trends';
import Footer from '../../components/footer/Footer';
import BlogForm from '../../components/blogform/BlogForm';
import { toastSuccessNotify,toastWarnNotify } from '../../helpers/toastNotify';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Div, InnerDiv,TrendsDiv } from "./Dashboard.style";

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
        <InnerDiv>
        <BlogForm/>
        </InnerDiv>
        <TrendsDiv>
        <Trends />
        </TrendsDiv>
      </Div>
    </div>
  )
}

export default Dashboard