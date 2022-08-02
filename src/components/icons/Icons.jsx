import React from 'react'
import LikeIcon from '../../assets/like.png'
import { IconDiv,ImageIcon } from './Icons.style'
import Comment from '../../assets/comment.png'


const Icons = () => {
  return (
    <IconDiv>
        <ImageIcon src={LikeIcon} alt="" />
        <ImageIcon src={Comment} alt="" />
    </IconDiv>
  )
}

export default Icons