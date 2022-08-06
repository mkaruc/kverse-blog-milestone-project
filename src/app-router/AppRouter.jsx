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
import Footer from '../components/footer/Footer'
import PrivateRouter from './PrivateRouter';
const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        <Route element={<PrivateRouter />}>
            <Route path="/" element={<Dashboard />}/>
        </Route>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/newblog" element={<NewBlog />}/>
            <Route path="/updateblog/:id" element={<UpdateBlog />}/>
            <Route path="/profile" element={<Profile />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRouter