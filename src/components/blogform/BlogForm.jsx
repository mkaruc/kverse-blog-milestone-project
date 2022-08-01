import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../blogcard/BlogCard'
import { BlogContext } from '../../contexts/BlogContext'

const BlogForm = () => {
  const {getBlogs, blogList, isLoading} = useContext(BlogContext);

  useEffect(() => {
    getBlogs()
  }, [getBlogs]);

 

  return (
  <div>
    <div>
      {blogList?.map((card)=>(
      <BlogCard key={card.id} card={{...card}} />
      ))}
    </div>
  </div>
  )
}

export default BlogForm;