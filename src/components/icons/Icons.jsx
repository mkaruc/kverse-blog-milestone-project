import React, { useContext, useState } from 'react'
import LikeIcon from '../../assets/like.png'
import { IconDiv,ImageIcon,Div } from './Icons.style'
import Comment from '../../assets/comment.png'
import CommentBox from '../comment/CommentBox'
import { BlogContext } from "../../contexts/BlogContextProvider";
import { useNavigate, useParams } from "react-router-dom";


const Icons = () => {
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [isCommentClicked, setIsCommentClicked] = useState(false);
    const [text, setText] = useState("");
    const { likeBlog } = useContext(BlogContext);
    const { like } = useParams(0);
    const handleClick = (like) => {
      if (isClicked) {
        likeBlog(like - 1);
      } else {
        likeBlog(like + 1);
      }
      setIsClicked(!isClicked);
    };

    
  return (
    <IconDiv>
      <Div>
        <ImageIcon src={LikeIcon} alt="" className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }/>
          <span className="likes-counter">{ `${likes}` }</span>
          </Div>
          <ImageIcon src={Comment} alt="" onClick={() => setIsCommentClicked(true)}/>
          { isCommentClicked && <CommentBox />}
    </IconDiv>
  )
}

export default Icons