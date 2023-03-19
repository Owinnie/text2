//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBox from './pages/ChatBox'
import UploadArea from './pages/UploadArea'
import Logo from './components/Logo';

function App() {
  return (
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

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>text2</h1>
    //     <p className='App-link'>
    //       <a href='example.com' className='App-link'>ChatBox</a>
    //       <a href='example.com' className='App-link'>UploadArea</a>
    //     </p>
    //   </header>
  
    //   <footer className='App-footer'>
    //     <br /><br /><br /><br /><br /><br /><br /><br />
    //     <br /><br /><br /><br /><br /><br /><br /><br />
    //     <br /><br /><br /><br /><br /><br /><br /><br />
    //     <br /><br /><br /><br /><br /><br /><br /><br />
    //     <small>
    //       text2 Version March 2023. ALX Specialization project.
    //       Convert text 2 speech, image, or pdf.
    //     </small>
    //     <section>
    //       <map name='flogo'>
    //         <a href='example.com' title='text2 logo'><area shape='circle' coords='75,75,75'
    //          alt='Home page' /></a>
    //       </map>
    //       <a href='example.com' title='text2 logo'><img usemap="#flogo"
    //         src="fav22.ico" title="text2 logo" alt="txt2 logo" width="112" height="100" /></a>
    //     </section>
    //     <br /><br /><br />
    //   </footer>
    // </div>
  );
}

export default App;
