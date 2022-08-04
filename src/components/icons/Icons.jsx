import React, { useContext, useEffect, useState } from 'react'
import LikeIcon from '../../assets/like.png'
import { IconDiv,ImageIcon,Div } from './Icons.style'
import Comment from '../../assets/comment.png'
import CommentBox from '../comment/CommentBox'
import { BlogContext } from "../../contexts/BlogContextProvider";
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate, useParams } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { toastErrorNotify, toastSuccessNotify } from "../../helpers/toastNotify";
import database from '../../helpers/firebase'


const Icons = () => {
  const [like, setLike] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const { likeBlog, cardList } = useContext(BlogContext);
  const {id} = useParams();
  const [cardDetail] = cardList.filter((card) => card.id === id);

  const formik = useFormik({
    initialValues: {
      likes:cardDetail.likes,
      id:cardDetail.id
    },
    onSubmit : async (values) => {
      try {
        await likeBlog(values);
      } catch (err) {
        toastErrorNotify(err.message);
      }
  },
});

const handleClick =() =>{
  if (isClicked) {
    setLike(like - 1);
  } else {
    setLike(like + 1);
  }
  setIsClicked(!isClicked);
};

  return (
    <div>
    <Formik>
          <div onSubmit={formik.handleSubmit}>
            <div className='titleBox'>
          <input type="number" value={formik.values.likes} name="likes" id='likes' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.likes && Boolean(formik.errors.likes)}/>
        </div>
          </div>
        
      </Formik>
  </div>
  )
}

export default Icons