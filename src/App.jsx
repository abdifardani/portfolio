import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header'
import Footer from './components/Footer'

import Homepage from './Pages/Home';
import Aboutpage from './Pages/About';
import Contactpage from './Pages/Contact';
import Portfoliopage from './Pages/Portfolio';
import Toolspage from './Pages/Tools';
import Servicespage from './Pages/Services';
import Frontend from './Pages/frontend';
import Dataanalyst from './Pages/dataanalyst';
import Iot from './Pages/iot';
import Coffeeproject from './Pages/Coffee';
import NewAbout from './Pages/NewAbout';
import NewProject from './Pages/NewProject';

import './App.css';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <Router>
      <Routes>

        <Route path="/" element={
          <div className='relative xl m-0 max-w-[1280px] w-full mx-auto z-[99999] dark:bg-[#0F0F0F] bg-[#FFFFFF]  
          overflow-x-hidden
          '>
            <Header />
            <Homepage />
            <NewAbout />  
            <NewProject />
            {/* <Aboutpage /> */}
            <Toolspage />
            <Servicespage />
            <Contactpage />
            <Footer />
          </div>
        }>
        </Route>

        <Route path="/frontend" element={<Frontend />}></Route>
        <Route path="/frontend/coffee" element={<Coffeeproject />}></Route>
        <Route path="/iot" element={<Iot />}></Route>
        <Route path="/dataanalyst" element={<Dataanalyst />}></Route>
      </Routes>
    </Router>
  )
}

export default App
