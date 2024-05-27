import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { Home } from './Home';
import { NavBar } from './NavBar';
import { Artica } from '../src/Artica/index';
import { Wine } from '../src/Wine/index';
import { ChillItHome } from '../src/ChillItHome/index';
import { Contact } from '../src/Contact/index';
import { AboutUs } from '../src/AboutUs/index';
import { Footer } from '../src/Footer/index';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './main.css';

function Container() {
  let location = useLocation();
  const [trigger, setTrigger] = React.useState(false);

  useEffect(() => {
    setTrigger(true);
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [location]);

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    keys: location => location.pathname,
    onRest: () => setTrigger(false)
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Routes location={item}>
        <Route path="/artica" element={<Artica />} />
        <Route path="/" element={<Home />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/home" element={<ChillItHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </animated.div>
  ));
}

let root = null;

function renderApp() {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById('root'));
  }
  
  root.render(
    <React.StrictMode>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <NavBar />
          <div style={{ flex: 1 }}>
            <Container />
          </div>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

renderApp();