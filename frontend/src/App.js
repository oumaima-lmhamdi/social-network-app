// import './App.css';
import ChatButton from './components/ChatButton/ChatButton';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://kit.fontawesome.com/cde8378e6c.js";
    script.async = true;
  
    document.body.appendChild(script);
  
  }, []);

  return (
    <div className="App">
      <ChatButton/>
    </div>
  );
}

export default App;
