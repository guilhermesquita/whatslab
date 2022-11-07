import styled from "styled-components";

export const Cab = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding-bottom: 10px;
    padding-top: 10px;
    border-left: 1px #F2F2F2 solid;
    border-right: 1px #F2F2F2 solid;
`
export const Info = styled.article`
    display: flex;
    gap: 10px;
    padding-left: 10px;
`
export const InfoText = styled.article`
    display: flex;
    flex-direction: column;
`

export const Online = styled.p `
    color: #B9BEC3;
    :hover{
        cursor: pointer;
    }
`

export const Icons = styled.section `
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
`

export const ImgProfile = styled.img `
    border-radius: 50px;
`