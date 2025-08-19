import { NavLink } from "react-router-dom";

const Navbar = ({ dropDownOpen, closing, isHamburger, isDone, displayed, toggleDropDown, resetMessage, setCurrentIndex }) => {

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <p id="portfolio">{displayed}
            {isDone && <span className="text-white">;</span>}
            <span className={`${isDone ? "blink" : "notBlink"}`}></span>
          </p>
        </div>
        <div className="right-section ">
          <NavLink
            to="/"
            className={({ isActive }) => "hidden sm:flex nav-link-underline" + (isActive ? " active" : "")}
            onClick={() => { setCurrentIndex(0); resetMessage(); }}
          >home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => "hidden sm:flex nav-link-underline" + (isActive ? " active" : "")}
            onClick={() => { setCurrentIndex(1); resetMessage(); }}
          >about
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => "hidden sm:flex nav-link-underline" + (isActive ? " active" : "")}
            onClick={() => { setCurrentIndex(2); resetMessage(); }}
          >projects
          </NavLink>
          {/* <NavLink
            to="/contact"
            className={({ isActive }) => "hidden sm:flex nav-link-underline" + (isActive ? " active" : "")}
            onClick={() => { setCurrentIndex(3); resetMessage(); }}
          >contact
          </NavLink> */}
          <div className="hamburger"
            onClick={() => { toggleDropDown(); }}>
            {isHamburger ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.95 11.95h32m-32 12h32m-32 12h32" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6" />
              </svg>}
          </div>
        </div >
        {dropDownOpen &&
          <div className={`dropdown-menu ${closing ? "animate-slide-up" : "animate-slide-down"}`}>
            <NavLink to="/" className={({ isActive }) =>
              "dropdown-link dropdown-hover" + (isActive ? " active" : "")
            } onClick={() => { toggleDropDown(); setCurrentIndex(0); resetMessage(); }}>home</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              "dropdown-link dropdown-hover" + (isActive ? " active" : "")
            } onClick={() => { toggleDropDown(); setCurrentIndex(1); resetMessage(); }}>about</NavLink>
            <NavLink to="/projects" className={({ isActive }) =>
              "dropdown-link dropdown-hover" + (isActive ? " active" : "")
            } onClick={() => { toggleDropDown(); setCurrentIndex(2); resetMessage(); }}>projects</NavLink>
            {/* <NavLink to="/contact" className={({ isActive }) =>
              "dropdown-link dropdown-hover" + (isActive ? " active" : "")
            } onClick={() => { toggleDropDown(); setCurrentIndex(3); resetMessage(); }}>contact</NavLink> */}
          </div>}
      </nav >
    </>
  )
}

export default Navbar;