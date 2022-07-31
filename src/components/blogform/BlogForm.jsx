import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../blogcard/BlogCard'
import { BlogContext } from '../context/BlogContextProvider'

const BlogForm = () => {
  const {getBlogs, blogList, isLoading} = useContext(BlogContext);

  useEffect(() => {
    getBlogs()
  }, [getBlogs]);

  isLoading ? (
    <p>Loading...</p>
  ): blogList?.length===0 ?(
    <p>No Blog Found</p>
  ):(
    blogList?.map((item)=>(
      <BlogCard key={item.id} item={{ ...item }} />
    ))
  )

  return (
    <div>BlogForm</div>
  )
}

export default BlogForm;