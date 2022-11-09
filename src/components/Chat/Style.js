import styled from "styled-components"

export const Msgs = styled.article `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
    gap: 5px
`

export const MainChatBox = styled.div`
    margin-left: ${props => props.person === "me" ? "auto" : 0};
    background-color:${props => props.person === "me" ? "#61C554" : "#E8ECEF"};
    min-width: 80px;
    max-width: 100px;
    padding: 8px;
    border-radius: 10px;
    color:${props => props.person === "me" ? "white" : "black"};

    h1{
        font-size: 12px;
    }

    article{
        display: flex;
        flex-direction: column;
         
        p{
            font-weight: 400;
            font-size: 10px;
            word-wrap: break-word;
        }

        div{
            font-weight: 500;
            font-size: 11px;
            color: #727272;
            margin-left: auto;
        }

        img{
            width: 16px;
            margin-left: 4px;
        }
    }
`