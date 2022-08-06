import Navbar from '../../components/navbar/Navbar';
import Trends from '../../components/trends/Trends';
import Footer from '../../components/footer/Footer';
import BlogForm from '../../components/blogform/BlogForm';
import { toastSuccessNotify,toastWarnNotify } from '../../helpers/toastNotify';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Div, InnerDiv, TrendsDiv, NavDiv,Button, NewBlogging } from "./Dashboard.style";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate=useNavigate();
  return (
    <div>
      <NavDiv>
        <Navbar />
      </NavDiv>
      <Div>
        <InnerDiv>
        <BlogForm />
        </InnerDiv>
        {/* <TrendsDiv>
        
        <Trends />
        </TrendsDiv> */}
      </Div>
    </div>
  )
}

export default Dashboard