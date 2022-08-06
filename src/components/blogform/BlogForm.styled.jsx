import styled from 'styled-components';

export const Div= styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* padding: 10px;   */
    width: 1000px;
`

export const MainDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    background-color:#94ebc4;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    color: white;
    width: 100%;
    &:hover{
        opacity: 0.8;
    }
`