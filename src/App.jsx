import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const getInitialIndex = () => {
  const saved = localStorage.getItem('currentIndex');
  return saved == null ? 0 : Number(saved);
}

function App() {
  const message = ['portfolio()', 'about()', 'projects()', 'contact()'];
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isHamburger, setIsHamburger] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(getInitialIndex);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const index = currentIndex;
    if (charIndex < message[index].length) {
      const timeout = setTimeout(() => {
        setDisplayed(message[index].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1)
      }, 70);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => { setIsDone(true); }, 80);
    return () => clearTimeout(timeout);
  }, [charIndex, message, isDone, currentIndex])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) { setDropDownOpen(false); setIsHamburger(true); } };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex);
  }, [currentIndex]);

  const resetMessage = () => {
    setCharIndex(0);
    setIsDone(false);
  }

  const toggleDropDown = () => {
    if (dropDownOpen) {
      setClosing(true);
      setIsHamburger(true);
      setTimeout(() => {
        setClosing(false);
        setDropDownOpen(false);
      }, 150)
    } else {
      setDropDownOpen(true);
      setIsHamburger(false);
    };
  }
  const outsideClicked = () => {
    if (dropDownOpen) {
      setClosing(true);
      setIsHamburger(true);
      setTimeout(() => {
        setDropDownOpen(false);
        setClosing(false);
      }, 150)
    }
  }

  function ScrollToTop() {
    const { pathname } = useLocation();
    const lastPathname = useRef(pathname);

    useEffect(() => {
      if (lastPathname.current !== pathname) {
        window.scrollTo(0, 0);
        lastPathname.current = pathname;
      }
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar
        dropDownOpen={dropDownOpen}
        closing={closing}
        isHamburger={isHamburger}
        isDone={isDone}
        displayed={displayed}
        toggleDropDown={toggleDropDown}
        resetMessage={resetMessage}
        setCurrentIndex={setCurrentIndex}
      />
      <main className="wrapper"
        onClick={() => { outsideClicked(); }}>
        <Routes>
          <Route path="/" element={<Home dropDownOpen={dropDownOpen} setCurrentIndex={setCurrentIndex} resetMessage={resetMessage} />} />
          <Route path="/about" element={<About dropDownOpen={dropDownOpen} />} />
          <Route path="/projects" element={<Projects dropDownOpen={dropDownOpen} />} />
          <Route path="/contact" element={<Contact dropDownOpen={dropDownOpen} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
