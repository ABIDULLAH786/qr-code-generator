import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Twitter from './pages/twitter';
import Email from './pages/email';

function App() {
  return (
    <div>
      <div className='px-2 md:mx-auto max-w-screen-xl min-h-screen '>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/instagram" element={<Home />} />
          <Route path="/youtube" element={<Home />} />
          <Route path="/linkedin" element={<Home />} />
          <Route path="/mail" element={<Email />} />
          <Route path="/wifi" element={<Home />} />
          <Route path="/call" element={<Home />} />
          <Route path="/sms" element={<Home/>} />
        </Routes>

        

      </div>
    </div>
  )
}

export default App;
