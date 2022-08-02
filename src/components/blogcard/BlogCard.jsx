import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from './BlogCard.style';

const BlogCard = ({card}) => {
  const {id,title,imgUrl,content,email}=card; 
  const navigate=useNavigate();
  
  const cardDetails=(e)=>{
    navigate(`/details/${id}`);
  }


  return (
    <Card onClick={(e) => cardDetails(e.target)}>
      <div>
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          {content}
        </div>
      </div>
      <div>
        <div>
          {email}
        </div>
        <div>
          //icons
        </div>
      </div>
    </Card>
  )
}

export default BlogCard