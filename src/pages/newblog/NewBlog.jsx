import React, { useContext } from "react";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { BlogContext } from "../../contexts/BlogContextProvider";
import { toastErrorNotify, toastSuccessNotify } from "../../helpers/toastNotify";
import { Container,MainDiv,Div,FormDiv,Input,Textarea,ExpImg } from './NewBlog.style';
import DefaultImage from '../../assets/placeholder.png'
import Navbar from '../../components/navbar/Navbar';

const NewBlog = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)
  const {addNewBlog} = useContext(BlogContext)

  const formik = useFormik({
    initialValues: {
      title: "",
      imgUrl: "",
      content:"",
      email:currentUser.email,
    },
    onSubmit:async (values) => {
        try {
          await addNewBlog(values);
          toastSuccessNotify("New blog added successfuly");
          navigate("/");
        } catch (err) {
         // alert(err.message);
         toastErrorNotify(err.message);
        }
    },
  });

  return (
   <MainDiv>
   <Navbar />
    <Container>
      <h4>Add a New Blog</h4>
      <Formik>
          <FormDiv onSubmit={formik.handleSubmit}>
            <Div className='titleBox'>
          <label htmlFor="title">Title</label>
          <Input type="text" value={formik.values.title} name="title" id='title' placeholder='Add Title' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.title)}/>
        </Div>
        <Div>
          <ExpImg src={formik.values.imgUrl || DefaultImage} alt="" />
        </Div>
        <Div className='imgurlBox'>
          <label htmlFor="imgUrl">Image URL</label>
          <Input type="text" value={formik.values.imgUrl} name="imgUrl" id='imgUrl' placeholder='Add a Image Link' onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.imgUrl)}/>
        </Div>
        <Div>
          <label htmlFor="content">Content</label>
          <Textarea  value={formik.values.content} className='contentBox' name="content" id='content' placeholder='Add a content' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.content)}/>
        </Div>
        <Div>
          <Input type="submit" value="Add A Blog" />
        </Div>
        <Div>
          <p>{currentUser.email}</p>
        </Div>
          </FormDiv>
        
      </Formik>
      
    </Container></MainDiv>
  );
};

export default NewBlog;