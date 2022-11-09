import { MainChatBox } from "./Style"

function Chat(props){
    return(
        <MainChatBox>
            <p>{props.messages}</p>
        </MainChatBox>
    )
}

export default Chat