import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard';
import UpdateBlog from '../pages/updateblog/UpdateBlog';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Details from '../pages/details/Details';
import About from '../pages/about/About';
import NewBlog from '../pages/newblog/NewBlog';
import Profile from '../pages/profile/Profile';

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