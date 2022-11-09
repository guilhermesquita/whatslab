import Header from './components/Header/Header';
import Chat from './components/Chat/Chat'
import Message from './components/Message/Message';
import { GlobalStyle } from './globalStyle'
import {Main} from './style'
import { useState } from 'react';
function App() {

  const [messages, setMessages] = useState([])
  console.log(messages)

  return (
    <Main>
      <GlobalStyle/>
      <Header/>
      <Chat messages={messages[messages.length-1]}/>
      <Message messages={messages} setMessages={setMessages}/>
    </Main>
  );
}

export default App;