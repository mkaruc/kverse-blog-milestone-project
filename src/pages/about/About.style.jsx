import styled from 'styled-components';

export const Div= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 350px;
    padding: 10px;
    border: solid 1px black;
`

export const Image=styled.img`
    border-radius: 50%;
    padding: 40px;
    width: 350px;
    background-color:  #97e7c35a;
    
`
export const Linked = styled.a`
    text-decoration:none;
    color: black;
    font-weight: bolder;
    
`
export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 10px;
    width: 100%;
    background-color:  #FA6E2F;
    border-radius: 10px;
`