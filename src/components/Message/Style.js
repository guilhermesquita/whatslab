import styled from "styled-components";

export const MessageInput = styled.section `
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    background-color: white;
    border-radius: 50px;
    box-shadow:0 4px 8px rgba(0,0,0,0.07);
`
export const Input = styled.input `
    width: 70%;
    height: 100%;
    border: none;
    outline: 0;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
`

export const Audio = styled.section `
    background-color: #61C554;
    height: 100%;
    border-radius: 50px;
    width: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    :hover{
        cursor: pointer;
    }
`

export const Ftr = styled.section `
    display: flex;
    align-items: center;
`