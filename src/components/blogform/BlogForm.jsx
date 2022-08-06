import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../blogcard/BlogCard'
import { BlogContext } from '../../contexts/BlogContextProvider'
import { Div,MainDiv,Button } from './BlogForm.styled'
import { useNavigate } from 'react-router-dom'

const BlogForm = () => {
  const {getBlogs, cardList, likeBlog} = useContext(BlogContext);
  const navigate=useNavigate();
  useEffect(() => {
    getBlogs()
  }, [getBlogs]);

    useEffect(()=>{
      likeBlog()
    },[likeBlog]
    )
 
  return (
    
  <MainDiv>
    <Div>
    <Button onClick={() => navigate("/newblog")}>Add a Blog</Button>
    </Div>
    <Div>
      {cardList?.map((card)=>(
      <BlogCard key={card.id} card={{...card}} />
      ))}</Div>
    </MainDiv>
  )
}

export default BlogForm;