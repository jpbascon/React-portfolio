import { useEffect, useState } from 'react';

const Projects = ({ dropDownOpen }) => {
  const [firstRow, setFirstRow] = useState(false);
  const [delayFirstRow, setDelayFirstRow] = useState(false);
  const [secondRow, setSecondRow] = useState(false);
  const [delaySecondRow, setDelaySecondRow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => { setFirstRow(true); }, 200)
    return () => clearTimeout(timeout);
  }, [])
  useEffect(() => {
    const timeout = setTimeout(() => { setDelayFirstRow(true); }, 400)
    return () => clearTimeout(timeout);
  }, [])
  useEffect(() => {
    const handleSecondRow = () => {
      if (window.scrollY > 150) { setSecondRow(true); const timeout = setTimeout(() => setDelaySecondRow(true), 300) }
    };
    window.addEventListener("scroll", handleSecondRow);
    handleSecondRow();
    return () => window.removeEventListener("resize", handleSecondRow);
  }, []);
  return (
    <>
      <div className={"flex flex-col items-center justify-center mt-[3rem] m-[6%] md:mt-[6rem] lg:mt-[10rem] projects-wrapper" + (dropDownOpen ? " active" : " ")}>
        <section className="md:pb-10 lg:pb-30">
          <h1 className="text-4xl/tight lg:text-6xl/tight font-bold text-center md:text-left paragraph-animate-right">
            Here are some of my <span className="text-green-400">favorites</span>
          </h1>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 w-full">
          <div className={`${firstRow ? "opacity-100 paragraph-animate-left" : "opacity-0"} w-full`}>
            <img
              className="rounded-lg"
              src="./movie-app.png"
              alt="Movie Application"
            ></img>
          </div>
          <div className={`${delayFirstRow ? "opacity-100 paragraph-animate-left" : "opacity-0"} flex flex-col gap-4 w-full`}>
            <a className="text-4xl/tight lg:text-6xl/tight font-bold text-left movie-link-underline w-fit" href="https://react-1-0-2.vercel.app/"><span className="text-green-400">Movie Application</span></a>
            <p className="text-lg lg:text-xl text-justify">Movie application with API integration using React.js, Tailwind CSS, Javascript, and Appwrite. Implemented trendings based on user's interaction.
              Optimized search function using debounced to enhance the software's performance.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 w-full">
          <div className={`${secondRow ? "opacity-100 paragraph-animate-left" : "opacity-0"} w-full`}>
            <img
              className="rounded-lg"
              src="./javascript.png"
              alt="E-commerce website application"
            ></img>
          </div>
          <div className={`${delaySecondRow ? "opacity-100 paragraph-animate-left" : "opacity-0"} flex flex-col gap-4 w-full`}>
            <a className="text-4xl/tight lg:text-6xl/tight font-bold text-left movie-link-underline w-fit" href="https://2-0-3.vercel.app/"><span className="text-green-400">Simple E-commerce product cart</span></a>
            <p className="text-lg lg:text-xl text-justify">Simple e-commerce with a local storage API integration. Created with HTML, CSS, and JavaScript.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects;