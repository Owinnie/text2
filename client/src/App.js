import './styles/App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ChatBox from './pages/ChatBox'
import UploadArea from './pages/UploadArea'
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className='App'>
      <Router>
        <Logo />
        <Header />
      
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/chat' element={<ChatBox />} />
          <Route path='/upload' element={<UploadArea />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
