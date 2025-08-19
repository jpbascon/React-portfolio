import Socials from './Socials.jsx';
import { useState, useEffect } from 'react';
/* import { NavLink } from "react-router-dom"; */

const Home = ({ dropDownOpen, resetMessage, setCurrentIndex }) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowLeft(true);
    }, 800);
    return () => clearTimeout(timeout1);
  }, []);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setShowRight(true);
    }, 300);
    return () => clearTimeout(timeout2);
  }, []);
  return (
    <>
      <div className={"home-wrapper" + (dropDownOpen ? " active" : "")}>
        <section className={`${showLeft ? "flex opacity-100 paragraph-animate-left" : "opacity-0"} left-wrapper`}>
          <div className="left-container">
            <h1>Hey,<br />I'm <span className="name">Jason</span></h1>
            <p>Passionate in web development. Pursuing to become a full-stack developer. I'm looking for a company to contribute
              my skills and grow with a collaborative team, and help deliver impactful digital experiences.
            </p>
          </div>
          <div className="flex items-center gap-10 flex-col">
            {/* <NavLink
              onClick={() => { setCurrentIndex(3); resetMessage(); }}
              to="/contact"
              className="text-lg button">
              Contact
            </NavLink> */}
          </div>
          <Socials />

        </section>
        <section className={`${showRight ? "flex opacity-100 paragraph-animate-right" : "opacity-0"} right-wrapper`}>
          <div>
            <img alt="My picture in a toga" src="./jasonb.jpeg" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;