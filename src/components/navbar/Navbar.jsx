import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/k-verse-logo.png'
import { AuthContext } from '../../contexts/AuthContext';
import { MainDiv, Image, Button,Div,Profile } from "./Navbar.style";
import { logout } from '../../helpers/firebase';

const Navbar = () => {
  const navigate =useNavigate();
  const {currentUser} =  useContext(AuthContext);
  const profileDetails=(e)=>{
    navigate(`/profile`);
  }

  return (
    <MainDiv>
      <div>
      <Link to="/"><Image src={LogoImg} alt="logo" /></Link>
      </div>
      <Div>
        <Profile onClick={(e) => profileDetails(e.target)}>
        <h5 >{currentUser.displayName || "NoName"}</h5>
        </Profile>
        <Button onClick={() => logout()} navigate="/login">
        <Link to="/login">Logout</Link>
        </Button>
      </Div>
    </MainDiv>
  )
}

export default Navbar