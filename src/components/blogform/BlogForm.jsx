import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../blogcard/BlogCard'
import { BlogContext } from '../../contexts/BlogContextProvider'

const BlogForm = () => {
  const {getBlogs, cardList, isLoading} = useContext(BlogContext);

  useEffect(() => {
    getBlogs()
  }, [getBlogs]);

 
  return (
  <div>
      {cardList?.map((card)=>(
      <BlogCard key={card.id} card={{...card}} />
      ))}
    </div>
  )
}

export default BlogForm;