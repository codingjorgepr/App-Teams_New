import { ChatEngine } from 'react-chat-engine';
import './App.css';
import CustomChatFeed from './components/ChatFeed';
import LoginForm  from './components/LoginForm';

const App = () => {
 if(!localStorage.getItem('username')) return <LoginForm />
    
 return(
        <ChatEngine
           height= "100vh"
           projectID="f6241ee0-6176-4f26-8b1b-cd01f73515b8"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <CustomChatFeed  {...chatAppProps }/> }
        />
    )
} 

export default App; 
