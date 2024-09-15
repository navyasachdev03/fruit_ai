import { Routes, Route, useNavigate } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Chat from './Chat';
import Faq from './Faq';
import Translate from './Translate';
import About from './About';
import './App.css';

function App() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  }

  const handleSignup = () => {
    navigate('/home');
  }

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={<Account onLogin={handleLogin} onSignup={handleSignup}/>} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
