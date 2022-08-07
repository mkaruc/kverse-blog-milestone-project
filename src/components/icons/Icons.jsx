// import React, { useContext, useEffect, useState } from 'react'
// import LikeIcon from '../../assets/like.png'
// import { Div,FormDiv,Input,Textarea,ExpImg } from './Icons.style'
// import Comment from '../../assets/comment.png'
// import CommentBox from '../comment/CommentBox'
// import { BlogContext } from "../../contexts/BlogContextProvider";
// import { AuthContext } from "../../contexts/AuthContext"
// import { useNavigate, useParams } from "react-router-dom";
// import { Formik, useFormik } from "formik";
// import { toastErrorNotify, toastSuccessNotify } from "../../helpers/toastNotify";
// import database from '../../helpers/firebase'
// import DefaultImage from '../../assets/placeholder.png'


// const Icons = ({card}) => {
//   const {id, likes}=card;
//   const iLike=parseInt(likes,10)
//   const [like, setLike] = useState(iLike);
//   const [isClicked, setIsClicked] = useState(false);
//   const {currentUser} = useContext(AuthContext);
//   const { likeBlog, cardList } = useContext(BlogContext);
//   // const {id} = useParams();
//   const [cardDetail] = cardList.filter((card) => card.id === id);

//   const formik = useFormik({
//     initialValues:{
//       title: cardDetail.title,
//       imgUrl: cardDetail.imgUrl,
//       content:cardDetail.content,
//       email:currentUser.email,
//       id:cardDetail.id,
//       likes: String(like),
//     },
//     onSubmit : async (values) => {
//       try {
//         await likeBlog(values);
//       } catch (err) {
//         toastErrorNotify(err.message);
//       }
//   },
// });
// const handleChange=()=>{
  
// }
// const handleClick =() =>{
//   if (isClicked) {
//     setLike(like - 1);
//   } else {
//     setLike(like + 1);
//   }
//   setIsClicked(!isClicked);
// };
// console.log(likes);
// console.log(like);
//   return (
//     <div>
//      {/* <Div>
//         <ImageIcon src={LikeIcon} alt="" className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick } value={likes} onChange={(e) => likeBlog(e.target.value)}/>
//           <span className="likes-counter">{ `${likes}` }</span>
//           </Div> */}

// <Formik>
//           <FormDiv onSubmit={formik.handleSubmit}>
//             <Div className='titleBox'>
          
//           <Input type="hidden" value={formik.values.title} name="title" id='title' placeholder='Add Title' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.title)}/>
//         </Div>
       
//         <Div className='imgurlBox'>
          
//           <Input type="hidden" value={formik.values.imgUrl} name="imgUrl" id='imgUrl' placeholder='Add a Image Link' onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.imgUrl)}/>
//         </Div>
//         <Div>
          
//           <Textarea value={formik.values.content} className='contentBox' name="content" id='content' placeholder='Add a content' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.content)}/>
//         </Div>

//         <Div>
//           <Input type="submit" value="like" onClick={()=>handleClick()}/><p>{formik.values.likes}</p>
//         </Div>
//         <Div style={{visibility: "hidden"}}>
//           <p>{currentUser.email}</p>
//         </Div>
//         <Div>
//           <Input type="hidden" value={formik.values.likes} name="likes" id='likes' placeholder='Add a Image Link' onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.likes && Boolean(formik.errors.likes)}/>
//         </Div>
//           </FormDiv>
        
//       </Formik>
//   </div>
//   )
// }

// export default Icons

import React, { useContext, useState } from 'react'
import database from '../../helpers/firebase'
import { getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database";
import { Formik, useFormik } from "formik";
import { BlogContext } from "../../contexts/BlogContextProvider";

const Icons = ({id,likes}) => {
  const [like, setLike]=useState(likes);
  const [isClicked, setIsClicked] = useState(false);
  const {likeBlog} = useContext(BlogContext);

  
  const formik = useFormik({
    initialValues: {
      id: id,
      likes: like,
    },
    onSubmit : async (values) => {
      try {
        await likeBlog(values);
      } catch (err) {
        // toastErrorNotify(err.message);
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
        <form onSubmit={formik.handleSubmit}>
          <div>
             <input type="number" value={formik.values.likes+like} name="likes" id='likes' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.likes && Boolean(formik.errors.likes)}/>
          </div>
          <span>{formik.values.likes}</span><input type="submit" value="Like" onClick={handleClick}/>
          <div>
          
          </div>
       </form>
      </Formik>
      
    </div>
  )
}

export default Icons