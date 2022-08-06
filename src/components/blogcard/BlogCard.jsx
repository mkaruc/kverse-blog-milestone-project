import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Icons from '../icons/Icons';
import { Card,Image,ImageContainer, ContentDiv, MainDiv,IconDiv } from './BlogCard.style';
import DefaultImage from '../../assets/placeholder.png'
import { BlogContext } from '../../contexts/BlogContextProvider'


const BlogCard = ({card}) => {
  const {likeBlog} = useContext(BlogContext);
  const {id,title,imgUrl,content,email, likes}=card; 
  const navigate=useNavigate();
  
  useEffect(()=>{
    likeBlog()
  },[likeBlog]
  ) 

  const cardDetails=(e)=>{
    navigate(`/details/${id}`);
  }


  return (
    <MainDiv>
    <Card onClick={(e) => cardDetails(e.target)}>
      <ImageContainer>
        <Image src={imgUrl || DefaultImage} alt={imgUrl} />
      </ImageContainer>
      <div>
        <div>
          <h4>{title}</h4>
        </div>
        <ContentDiv>
          {content}
        </ContentDiv>
      </div>
      <div>
        <div>
          {email}
        </div>
        
      </div>
    </Card>
    <IconDiv>
          <Icons card={card}/>
        </IconDiv>
    </MainDiv>
  )
}

export default BlogCard