import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../blogcard/BlogCard'
import { BlogContext } from '../../contexts/BlogContextProvider'
import { Div } from './BlogForm.styled'

const BlogForm = () => {
  const {getBlogs, cardList, isLoading} = useContext(BlogContext);

  useEffect(() => {
    getBlogs()
  }, [getBlogs]);

 
  return (
  <Div>
      {cardList?.map((card)=>(
      <BlogCard key={card.id} card={{...card}} />
      ))}
    </Div>
  )
}

export default BlogForm;