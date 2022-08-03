import styled from "styled-components";

export const MainDiv= styled.div`
    background-color: #FA6E2F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`
export const Div= styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 1rem;
`

export const Image = styled.img`
    height: 50px;
`
export const Button = styled.button`
    background-color:#c2edda;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    color: white;
    &:hover{
        opacity: 0.8;
    }
`
export const Profile=styled.div` 
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background: #00000016;
        cursor:pointer;
    }
`