import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://picsum.photos/1600/900');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;

`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background-color:  #97e7c3;
    height: 580px;
    width: 400px;
    border-radius: 10px;
    opacity: 0.9;
    transform: translateY(1000px);
    animation: slideIn .9s ease-in-out forwards .5s;


    @keyframes slideIn {
    0% {
      transform: translateX(1000px) scale(.5);
    }
    100% {
      transform: translateX(400px) scale(1);
    }
  }
`

export const Button = styled.button`
    background-color:#68d388;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    color: white;
    &:hover{
        opacity: 0.8;
    }
`
export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    &:hover{
        opacity: 0.8;
    }
`
export const Input = styled.input`
    padding: 10px;
    border: 1px #e5eaf5 solid;
    border-radius: 5px;
`