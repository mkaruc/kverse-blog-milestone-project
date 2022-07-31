import React from 'react'
import About from '../../pages/about/About'
import { MainDiv,List,Linked } from './Footer.style'
const Footer = () => {
  return (
    <MainDiv>
      <div>
        <About/>
      </div>
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