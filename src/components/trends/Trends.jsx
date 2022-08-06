// import React, { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button,MainDiv } from './Trends.style'
// import { BlogContext } from '../../contexts/BlogContextProvider'


// const Trends = () => {
//   const {getBlogs, cardList, likeBlog} = useContext(BlogContext);
//   useEffect(() => {
//     getBlogs()
//   }, [getBlogs]);
//   const navigate=useNavigate();
//   return (
//     <MainDiv>
//       <Button onClick={() => navigate("/newblog")}>Add a Blog</Button>
//       <h4>Trends</h4>
//       <div>
//       {cardList?.map((item)=>(
//         <div className="titles">{item}</div>
//       ))
//       }
//       </div>

//     </MainDiv>
//   )
// }

// export default Trends 
import React from 'react'

const Trends = () => {
  return (
    <div></div>
  )
}

export default Trends