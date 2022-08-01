import React, { useContext, useState } from 'react'
import { AuthContext } from "../../contexts/AuthContext";
import { BlogContext } from "../../contexts/BlogContext";
import { useNavigate } from 'react-router-dom'
import { toastErrorNotify, toastSuccessNotify } from "../../helpers/toastNotify";
// import { Formik,useFormik } from 'formik';
import Navbar from '../../components/navbar/Navbar';
import { Container,MainDiv,Div,FormDiv,Input,Textarea,ExpImg } from './NewBlog.style';
import DefaultImage from '../../assets/placeholder.png'

const NewBlog = ({blogs, setBlogs}) => {
  const navigate=useNavigate();
  const {currentUser}=useContext(AuthContext)
  const {addNewBlog}=useContext(BlogContext)
  const [title, setTitle]=useState("");
  const [imgUrl, setImgUrl]=useState("");
  const [content, setContent]=useState("");
  const [email, setEmail]=useState("")
  
  
  function submitBlog(e){
    e.preventDefault();
    const id=new Date().getTime();
    const addBlog={id:id, title:title, imgUrl: imgUrl, content: content, email: email}
    console.log(addBlog);
    setBlogs([...blogs,addBlog])
    navigate("/");
  };
//   const formikForm=useFormik({
// initialValues:{
//   title:"",
//   imgUrl:"",
//   content:"",
//   email:currentUser.email,
// },
// onSubmit: async(values)=>{
//   try {
//     await addNewBlog(values);
//     toastSuccessNotify("New blog added!..")
//     navigate("/");
//   } catch (error) {
//     toastErrorNotify(error.message);
//   }
// }

//   })
  return (
    <MainDiv>
      <Navbar />
      <Container>
      <h4>Add a New Blog</h4>
      <FormDiv onSubmit={submitBlog}>
        <Div className='titleBox'>
          <label htmlFor="title">Title</label>
          <Input type="text" value={title} name="Title" id='title' placeholder='Add Title' onChange={(e)=> setTitle(e.target.value)} required/>
        </Div>
        <Div>
          <ExpImg src={imgUrl || DefaultImage} alt="" />
        </Div>
        <Div className='imgurlBox'>
          <label htmlFor="imgUrl">Image URL</label>
          <Input type="text" value={imgUrl} name="ImgUrl" id='imgUrl' placeholder='Add a Image Link' onChange={(e)=> setImgUrl(e.target.value)} />
        </Div>
        <Div >
          <label htmlFor="content">Content</label>
          <Textarea  value={content} className='contentBox' name="Content" id='content' placeholder='Add a content' onChange={(e)=> setContent(e.target.value)} required/>
        </Div>
        <Div>
          <Input type="submit" value="Add A Blog" />
        </Div>
        <Div>
          <p>{currentUser.email}</p>
        </Div>
        </FormDiv>
      {/* <Formik>
        {()=>(
          <form onSubmit={formikForm.handleSubmit}>
            <div>
             <div>

             </div>
             <div name="title" label="Title" variant="outlined" value={formikForm.values.title} onChange={formikForm.handleChange} onBlur={formikForm.handleBlur}>
             </div>
             <div name="imgUrl" label="Image URL" variant="outlined" value={formikForm.values.imgUrl} onChange={formikForm.handleChange} onBlur={formikForm.handleBlur}>
             </div>
             <div name="content" label="Content" variant="outlined" value={formikForm.values.content} onChange={formikForm.handleChange} onBlur={formikForm.handleBlur}>
             </div>
             <div>
              <button type='submit'>Submit</button>
             </div>
            </div>
          </form>

        )}
      </Formik> */}
      </Container>
    </MainDiv>
  )
}

export default NewBlog