import Smiley from '../../assets/Smiley.svg'
import Paperclip from '../../assets/Paperclip.svg'
import Microphone from '../../assets/Microphone.svg'
import { MessageInput, Input, Ftr, Audio } from './Style';
import { useState } from 'react';


export default function Message() {

    const [msg, setMsg] = useState('');

    function onChangeInput(event){
        setMsg(event.target.value)
        console.log(event.target.value)
    }

    function enterDown(event){
        if(event.key === "Enter"){
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