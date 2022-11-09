import { MainChatBox, Msgs } from "./Style"
import check from '../../assets/bluecheck.svg'

function Chat(props){

    const MostraMensagem = props.messages.map((mensagem, index)=>{
        return(
            <MainChatBox key={index} person={mensagem.person}>
                <h1>{mensagem.person}</h1>
                <article>
                    <p>{mensagem.message}</p>
                    <div>
                        <img src={check} alt='check'/>
                    </div>
                </article>
            </MainChatBox>
        )
    })

    return (
        <Msgs>
            {MostraMensagem}
        </Msgs>
    )
}

export default Chat