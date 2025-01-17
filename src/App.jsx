import './index.css'
import { BrowserRouter, Route,Router,Routes,  } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Merch from './pages/Merch';
import Home from './components/Home';
import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';
import RegisterSection from './components/RegisterSection';
import FooterSection from './components/FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function App() {
  return (
   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={
          <>
            <Home/>
            <UpcomingEvents/>
            <PastEvents/>
            <RegisterSection/>
            <FooterSection/>
          </>
        } />
        <Route path="/about-us" element={<About />} />
        <Route path="/merch" element={<Merch/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App
