import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button,MainDiv } from './Trends.style'

const Trends = () => {
  const navigate=useNavigate();
  return (
    <MainDiv>
      <Button onClick={() => navigate("/newblog")}>Add a Blog</Button>
      <h4>Trends</h4>

    </MainDiv>
  )
}

export default Trends