import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { forgotPassword, signIn, signUpProvider } from '../../helpers/firebase';
import {MainDiv, Button, Div, FormDiv, Input,} from './Login.style';


const Login = () => {
  const[email, setEmail]=useState();
  const[password, setPassword]=useState();
  const navigate= useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();
    signIn(email,password,navigate);
  };
  const handleProviderLogin=()=>{
    signUpProvider(navigate);
  };
  const handleProviderGithubLogin=()=>{
    console.log("under Construction")
  }

  return (
    <MainDiv>
      {/* <div className='LoginPhotos'>
        <Image src="https://picsum.photos/800/800" alt="Login page photos" />
      </div> */}
      <Div className="loginForm">
        <h1 className="loginHeader">Login</h1>
        <h2 className="mottoLogin">follow the white rabbit</h2>
        <form id='login' onSubmit={handleLogin}>
          <FormDiv className="emailLogin">
          <label htmlFor="email">Email</label>
          <Input type="email" id='email' placeholder='Enter Your Email Adress' onChange={(e)=> setEmail(e.target.value)} required/>
          </FormDiv>
          <FormDiv className="passwordLogin">
          <label htmlFor="password">Password</label>
          <Input type="password" id='password' placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)} required/>
          </FormDiv>
          <div className="forgotten" onClick={()=>forgotPassword(email)}>
              Forgot Password?
          </div>
          <Input type="submit" value="Login"/>
        </form>
        <Button className="googleLogin" onClick={handleProviderLogin}>
          Continue with Google
        </Button>
        <Button className="githubLogin" onClick={handleProviderLogin}>
          Continue with GitHub
        </Button>
        <div className="registerLogin">
        Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </Div>
    </MainDiv>
  )
}

export default Login