import Header from './components/Header/Header';
import Chat from './components/Chat/Chat'
import Message from './components/Message/Message';
import { GlobalStyle } from './globalStyle'
import {Main} from './style'

function App() {
  return (
    <Main>
      <GlobalStyle/>
      <Header/>
      <Chat/>
      <Message/>
    </Main>
  );
}

export default App;