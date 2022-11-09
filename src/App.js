import Header from './components/Header/Header';
import Chat from './components/Chat/Chat'
import Message from './components/Message/Message';
import { GlobalStyle } from './globalStyle'
import {Main} from './style'
import { useState } from 'react';
function App() {

  const [messages, setMessages] = useState([])
  const [person,setPerson] = useState('');

  return (
    <Main>
      <GlobalStyle/>
      <Header person={person} setPerson={setPerson}/>
      <Chat 
        messages={messages}
      />
      <Message person={person} messages={messages} setMessages={setMessages}/>  
    </Main>
  );
}

export default App;