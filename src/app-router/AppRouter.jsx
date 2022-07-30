import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import UpdateBlog from '../pages/UpdateBlog';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Details from '../pages/Details';
import About from '../pages/About';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/details/id" element={<Details />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/NewBlog" element={<NewBlog />}/>
            <Route path="/UpdateBlog" element={<UpdateBlog />}/>
            <Route path="/Profile" element={<Profile />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter