import React, { useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext";
import { BlogContext } from "../../contexts/BlogContext";
import { useNavigate } from 'react-router-dom'
import { toastErrorNotify, toastSuccessNotify } from "../../helpers/toastNotify";
import { Formik,useFormik } from 'formik';

const NewBlog = () => {
  const navigate=useNavigate();
  const {currentUser}=useContext(AuthContext)
  const {addNewBlog}=useContext(BlogContext)

  const formikForm=useFormik({
initialValues:{
  title:"",
  imgUrl:"",
  content:"",
  email:currentUser.email,
},
onSubmit: async(values)=>{
  try {
    await addNewBlog(values);
    toastSuccessNotify("New blog added!..")
    navigate("/");
  } catch (error) {
    toastErrorNotify(error.message);
  }
}

  })
  return (
    <div>
      <h4>Add a New Blog</h4>
      <Formik>
        {()=>(
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <div>
                  
                </div>
              </div>
            </div>
          </form>

        )}
      </Formik>
    </div>
  )
}

export default NewBlog