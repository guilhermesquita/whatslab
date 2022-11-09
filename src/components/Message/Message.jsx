import Smiley from '../../assets/Smiley.svg'
import Paperclip from '../../assets/Paperclip.svg'
import Microphone from '../../assets/Microphone.svg'
import { MessageInput, Input, Ftr, Audio } from './Style';
import { useState } from 'react';
import Chat from '../Chat/Chat';


export default function Message(props) {

    const [msg, setMsg] = useState('');

    function onChangeInput(event){
        setMsg(event.target.value)
    }

    function enterDown(event){
        if(event.key === "Enter"){
            const messagesCopy = [...props.messages]
            messagesCopy.push(msg)
            props.setMessages(messagesCopy)
            setMsg("")
        }
    }
    return (
        <Ftr>
            <MessageInput>
                <a href='#'><img src={Smiley} alt="Emojis" /></a>
                <Input type={'text'} placeholder='Type a message' value={msg} onChange={onChangeInput} onKeyDown={enterDown}/>
                <a href='#'><img src={Paperclip} alt='Anex'/></a>
            </MessageInput>
            <Audio>
                <img src={Microphone} alt='microphone'/>
            </Audio>
        </Ftr>
    );
  }