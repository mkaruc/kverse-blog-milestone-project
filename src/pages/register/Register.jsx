import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../../helpers/firebase';
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

  return (
    <div>
      <div className='RegisterPhotos'>
        <img src="https://picsum.photos/800/800" alt="Register page photos" />
      </div>
      <div className="registerForm">
        <h1 className="registerHeader">Register</h1>
        <h2 className="mottoRegister">Welcome to K-Verse's Wonderland</h2>
        <form id='register' onSubmit={handleRegister}>
          <div className="firstName">
          <label htmlFor="text">First Name</label>
          <input type="text" id='text' placeholder='Enter Your First Name' onChange={(e)=> setEmail(e.target.value)} required/>
          </div>
          <div className="lastName">
          <label htmlFor="text">Last Name</label>
          <input type="text" id='text' placeholder='Enter Your Last Name' onChange={(e)=> setEmail(e.target.value)} required/>
          </div>
          <div className="emailLogin">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Enter Your Email Adress' onChange={(e)=> setEmail(e.target.value)} required/>
          </div>
          <div className="passwordLogin">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)} required/>
          </div>
          <input type="submit" value="Register" />
        </form>
        <button className="googleLogin" >
          Continue with Google
        </button>
        <button className="githubLogin" >
          Continue with GitHub
        </button>
        <div className="registerLogin">
        Do you have an account? <Link to="/login">Login</Link> also.
        </div>
      </div>
    </div>
  )
}

export default Register