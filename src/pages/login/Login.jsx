import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {MainDiv, Button, Div, FormDiv, Input,} from './Login.style';
import {AuthContext} from '../../contexts/AuthContext';
import { auth, db, logInWithEmailAndPassword, logout, registerWithEmailAndPassword, sendPasswordReset, signInWithGoogle } from "../../helpers/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () => {
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const navigate= useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogin=(e)=>{
    e.preventDefault();
    logInWithEmailAndPassword(email,password,navigate);
  };
  const handleProviderGithubLogin=()=>{
    console.log("under Construction")
  }
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

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
          <div className="forgotten" onClick={()=>sendPasswordReset(email)}>
              Forgot Password?
          </div>
          <Input type="submit" value="Login" onClick={() => logInWithEmailAndPassword(email, password)}/>
        </form>
        <Button className="googleLogin" onClick={signInWithGoogle}>
          Continue with Google
        </Button>
        {/* <Button className="githubLogin" onClick={handleProviderLogin}>
          Continue with GitHub
        </Button> */}
        <div className="registerLogin">
        Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </Div>
    </MainDiv>
  )
}

export default Login