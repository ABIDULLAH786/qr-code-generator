import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Twitter from './pages/twitter';
import Email from './pages/email';
import Call from './pages/call';
import SMS from './pages/sms';
import Wifi from './pages/wifi';
import Youtube from './pages/youtube';
import Instagram from './pages/instagram';

function App() {
  return (
    <div>
      <div className='px-2 md:mx-auto max-w-screen-xl min-h-screen '>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/linkedin" element={<Home />} />
          <Route path="/mail" element={<Email />} />
          <Route path="/wifi" element={<Wifi />} />
          <Route path="/call" element={<Call />} />
          <Route path="/sms" element={<SMS/>} />
        </Routes>

        

      </div>
    </div>
  )
}

export default App;
