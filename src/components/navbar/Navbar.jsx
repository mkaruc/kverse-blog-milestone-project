import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/k-verse-logo.png'
import { AuthContext } from '../../contexts/AuthContext';
import { MainDiv, Image, Button,Div } from "./Navbar.style";
import { logOut } from '../../helpers/firebase';

const Navbar = () => {
  const navigate =useNavigate();
  const {currentUser} =  useContext(AuthContext);

  return (
    <MainDiv>
      <div>
      <Link to="/"><Image src={LogoImg} alt="logo" /></Link>
      </div>
      <Div>
        <h5>{currentUser.displayName}</h5>
        <Button onClick={() => logOut()} navigate="/login">
        <Link to="/login">Logout</Link>
        </Button>
      </Div>
    </MainDiv>
  )
}

export default Navbar