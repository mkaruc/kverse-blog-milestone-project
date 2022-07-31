import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../../helpers/firebase';
import {MainDiv,Div,Button,Input,FormDiv} from './Register.style'
import { forgotPassword, signIn, signUpProvider } from '../../helpers/firebase';
const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const[email, setEmail]=useState();
  const[password, setPassword]=useState();
  const navigate= useNavigate();

  const handleRegister=(e)=>{
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);
    
  };
  const handleProviderLogin=()=>{
    signUpProvider(navigate);
  };
  const handleProviderGithubLogin=()=>{
    console.log("under Construction")
  };

  return (
    <MainDiv>
      <Div className="registerForm">
        <h1 className="registerHeader">Register</h1>
        <h2 className="mottoRegister">Welcome to K-Verse's Wonderland</h2>
        <div id='register' onSubmit={handleRegister}>
          <FormDiv className="firstName">
          <label htmlFor="text">First Name</label>
          <Input type="text" id='text' placeholder='Enter Your First Name' onChange={(e)=> setEmail(e.target.value)} required/>
          </FormDiv>
          <FormDiv className="lastName">
          <label htmlFor="text">Last Name</label>
          <Input type="text" id='text' placeholder='Enter Your Last Name' onChange={(e)=> setEmail(e.target.value)} required/>
          </FormDiv>
          <FormDiv className="emailLogin">
          <label htmlFor="email">Email</label>
          <Input type="email" id='email' placeholder='Enter Your Email Adress' onChange={(e)=> setEmail(e.target.value)} required/>
          </FormDiv>
          <FormDiv className="passwordLogin">
          <label htmlFor="password">Password</label>
          <Input type="password" id='password' placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)} required/>
          </FormDiv>
          <Input type="submit" value="Register" />
        </div>
        <Button className="googleLogin" onClick={handleProviderLogin}>
          Continue with Google
        </Button>
        <Button className="githubLogin" onClick={handleProviderLogin}>
          Continue with GitHub
        </Button>
        <div className="registerLogin">
        Do you have an account? <Link to="/login">Login</Link> also.
        </div>
      </Div>
    </MainDiv>
  )
}

export default Register