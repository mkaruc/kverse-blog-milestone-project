import React from 'react'
import { useNavigate } from 'react-router-dom'
import About from '../../pages/about/About'
import { MainDiv,List,Linked,Div } from './Footer.style'
const Footer = () => {
  const navigate=useNavigate();
  const aboutMe=(e)=>{
    navigate(`/about`);
  }
  return (
    <MainDiv>
      <Div onClick={(e)=> aboutMe()}>
        <p>About Me -- MKaruc&copy;2022</p>
      </Div>
      <div>
        <List>
          <li><Linked href="https://www.linkedin.com/in/fatih-mehmet-karuc/" target={'_blank'} >linkedin</Linked></li>
          <li><Linked href="https://github.com/mkaruc" target={'_blank'}>github</Linked></li>
          <li><Linked href="https://twitter.com/gestaltcoder" target={'_blank'}>twitter</Linked></li>
        </List>
      </div>
    </MainDiv>
  )
}

export default Footer