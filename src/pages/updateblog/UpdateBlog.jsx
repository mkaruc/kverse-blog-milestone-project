import { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Formik, useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"
import { BlogContext } from "../../contexts/BlogContextProvider";
import { toastErrorNotify, toastSuccessNotify } from "../../helpers/toastNotify";
import { Container,MainDiv,Div,FormDiv,Input,Textarea,ExpImg } from "./UpdateBlog.style"
import DefaultImage from '../../assets/placeholder.png'
const UpdateBlog = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
  const {updateBlog, cardList} = useContext(BlogContext);
  const {id} = useParams();
  const [cardDetail] = cardList.filter((card) => card.id === id);

  const formik = useFormik({
    initialValues: {
      title: cardDetail.title,
      imgUrl: cardDetail.imgUrl,
      content:cardDetail.content,
      email:currentUser.email,
      id:cardDetail.id,
      likes: cardDetail.likes,
    },
    onSubmit : async (values) => {
      try {
        await updateBlog(values);
        toastSuccessNotify("Blog updated successfully");
        navigate("/");
      } catch (err) {
        toastErrorNotify(err.message);
      }
  },
});
  return (
    <div>
      <Navbar/>
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
          <Input type="submit" value="Update The Blog" />
        </Div>
        <Div>
          <p>{currentUser.email}</p>
        </Div>
        <Div>
          <p>Likes:{formik.values.likes}</p>
        </Div>
          </FormDiv>
        
      </Formik>
      
    </Container>
      <div>

      </div>
    </div>
  )
}

export default UpdateBlog