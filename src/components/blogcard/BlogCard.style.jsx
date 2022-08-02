import styled from "styled-components";

export const MainDiv = styled.div`
    border: 1px black solid;
    max-width: 400px;
    height: px;
    margin: 1rem;
    border-radius: 10px;
    padding: 10px;
`
export const Card = styled.div`
    margin: 1rem;
    cursor: pointer;
    &:hover{
        box-shadow: 20px;
    }
`

export const ImageContainer = styled.div`
    height: 180px;
    width: 350px;
    overflow: hidden;
`

export const Image = styled.img`
    width: 350px;
`

export const ContentDiv=styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    height: 40px;
`