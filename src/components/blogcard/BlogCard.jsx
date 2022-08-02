import React from 'react'
import { useNavigate } from 'react-router-dom';
import Icons from '../icons/Icons';
import { Card,Image,ImageContainer, ContentDiv, MainDiv } from './BlogCard.style';

const BlogCard = ({card}) => {
  const {id,title,imgUrl,content,email}=card; 
  const navigate=useNavigate();
  
  const cardDetails=(e)=>{
    navigate(`/details/${id}`);
  }


  return (
    <MainDiv>
    <Card onClick={(e) => cardDetails(e.target)}>
      <ImageContainer>
        <Image src={imgUrl} alt={imgUrl} />
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
    <div>
          <Icons />
        </div>
    </MainDiv>
  )
}

export default BlogCard