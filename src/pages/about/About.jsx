import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Div, Image, Linked, List } from './About.style'

const About = () => {
  return (
    <div>
      <Navbar />
      <Div>
        <Image src="https://ca.slack-edge.com/T03AUTQTNEN-U03C8CWG1B2-d621ba7c0224-512" alt="" />
        <h1>I'm Fatih Mehmet Karuç</h1>
        <h2>FrontEnd Web Developer at Cenuta</h2>
        <p>
          This is a Project at Clarusway FrontEnd Cohort #11. I will try something on this project but nowadays that all guys!..
        </p>
        <List>
          <li><Linked href="https://www.linkedin.com/in/fatih-mehmet-karuc/" target={'_blank'} >linkedin</Linked></li>
          <li><Linked href="https://github.com/mkaruc" target={'_blank'}>github</Linked></li>
          <li><Linked href="https://twitter.com/gestaltcoder" target={'_blank'}>twitter</Linked></li>
        
        </List>
      </Div>
    </div>
  )
}

export default About