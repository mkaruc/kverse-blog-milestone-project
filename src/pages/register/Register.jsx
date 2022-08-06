import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {MainDiv,Div,Button,Input,FormDiv} from './Register.style'
import {auth,registerWithEmailAndPassword,signInWithGoogle,} from "../../helpers/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[email, setEmail]=useState(null);
  const[password, setPassword]=useState("");
  const navigate= useNavigate();
  const [user, loading, error] = useAuthState(auth);


  const handleRegister=()=>{
    // e.preventDefault();
    // const displayName = `${firstName} ${lastName}`;
    registerWithEmailAndPassword(firstName, lastName, email, password);
    
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/login");
  }, [user, loading]);
  return (
    <MainDiv>
      <Div className="registerForm">
        <h1 className="registerHeader">Register</h1>
        <h2 className="mottoRegister">Welcome to K-Verse's Wonderland</h2>
        <div id='register' onSubmit={handleRegister}>
          <FormDiv className="firstName">
          <label htmlFor="text">First Name</label>
          <Input type="text" id='text' placeholder='Enter Your First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} required/>
          </FormDiv>
          <FormDiv className="lastName">
          <label htmlFor="text">Last Name</label>
          <Input type="text" id='text' placeholder='Enter Your Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)} required/>
          </FormDiv>
          <FormDiv className="emailLogin">
          <label htmlFor="email">Email</label>
          <Input type="email" id='email' placeholder='Enter Your Email Adress' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
          </FormDiv>
          <FormDiv className="passwordLogin">
          <label htmlFor="password">Password</label>
          <Input type="password" id='password' placeholder='Enter Your Password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
          </FormDiv>
          <FormDiv>
          <Input type="submit" value="Register" onClick={handleRegister} />
          </FormDiv>
        </div>
        <Button className="googleLogin" onClick={signInWithGoogle}>
          Continue with Google
        </Button>
        {/* <Button className="githubLogin" onClick={handleProviderLogin}>
          Continue with GitHub
        </Button> */}
        <div className="registerLogin">
        Do you have an account? <Link to="/login">Login</Link> also.
        </div>
      </Div>
    </MainDiv>
  )
}

export default Register