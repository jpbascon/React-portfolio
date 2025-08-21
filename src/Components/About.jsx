import { useEffect, useState } from 'react';

const About = ({ dropDownOpen }) => {
  const [firstRow, setFirstRow] = useState(false);
  const [delayFirstRow, setDelayFirstRow] = useState(false);
  const [secondRow, setSecondRow] = useState(false);
  const [delaySecondRow, setDelaySecondRow] = useState(false);
  const [thirdRow, setThirdRow] = useState(false);
  const [delayThirdRow, setDelayThirdRow] = useState(false);
  const [fourthRow, setFourthRow] = useState(false);

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
      if (window.scrollY > 250) { setSecondRow(true); const timeout = setTimeout(() => setDelaySecondRow(true), 300) }
      if (window.scrollY > 600) { setThirdRow(true); const timeout = setTimeout(() => setDelayThirdRow(true), 300) }
      if (window.scrollY > 1200) { setFourthRow(true); }
    };
    window.addEventListener("scroll", handleSecondRow);
    handleSecondRow();
    return () => window.removeEventListener("resize", handleSecondRow);
  }, []);

  return (
    <>
      <div className={"about-wrapper" + (dropDownOpen ? " active" : "")}>
        <section className="flex flex-col-reverse items-stretch md:flex-row gap-8 md:gap-20 pb-10 md:pb-15 m-[6%] mt-[5rem] sm:mt-[7rem] md:mt-[8rem] lg:mt-[11rem]">
          <div className={`${firstRow ? "flex opacity-100 paragraph-animate-left" : "opacity-0"} flex-col justify-center gap-4 w-full`}>
            <h1 className="text-4xl/tight lg:text-5xl/tight font-bold text-center md:text-left">My internship got me into <span className="text-green-400">web development</span></h1>
            <p className="text-base lg:text-lg text-justify">I started my journey in web development with WordPress, despite having little knowledge of the fundamentals at the time.
              The challenge motivated me to strengthen my skills, beginning with HTML and CSS, and later moving on to JavaScript. For context, this was around April of 2025.
            </p>
          </div>
          <div className={`${delayFirstRow ? "flex opacity-100 image-animate" : "opacity-0"} relative justify-center w-full`}>
            <img
              className="relative rounded-lg object-cover md:-rotate-1 about-img"
              src="./wordpress.png"
              alt="One of my first website creation using WordPress"></img>
            <svg className="absolute md:inline-block md:rotate-20 top-[-8%] md:top-[-13%] right-[-4%] w-[60px] md:w-[80px] lg:w-[90px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7.9" fill="white" />
              <g fill="#00749c"><path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48c0-.63.478-1.218 1.152-1.218q.03 0 .058.003l.031.003A6.84 6.84 0 0 0 8 1.137A6.86 6.86 0 0 0 2.266 4.23c.16.005.313.009.442.009c.717 0 1.828-.087 1.828-.087c.37-.022.414.521.044.565c0 0-.371.044-.785.065l2.5 7.434l1.5-4.506l-1.07-2.929c-.369-.022-.719-.065-.719-.065c-.37-.022-.326-.588.043-.566c0 0 1.134.087 1.808.087c.718 0 1.83-.087 1.83-.087c.37-.022.413.522.043.566c0 0-.372.043-.785.065l2.48 7.377l.684-2.287l.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.86 6.86 0 0 0 3.868 6.176L1.73 5.206A6.8 6.8 0 0 0 1.137 8" />
                <path d="M6.061 14.583L8.121 8.6l2.109 5.78q.02.05.049.094a6.85 6.85 0 0 1-4.218.109m7.96-9.876q.046.328.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z" />
                <path d="M0 8c0-4.411 3.589-8 8-8s8 3.589 8 8s-3.59 8-8 8s-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633S15.632 12.209 15.632 8C15.632 3.79 12.208.367 8 .367C3.79.367.367 3.79.367 8" />
              </g>
            </svg>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-8 md:gap-20 py-10 md:py-15 items-stretch justify-center m-[6%]">
          <div className={`${secondRow ? "flex paragraph-animate-left opacity-100" : "opacity-0"} relative justify-center w-full`}>
            <img
              className="relative rounded-lg object-cover md:rotate-1 z-2 about-img"
              src="./first_project.png"
              alt="First website creation using HTML and CSS"></img>
            <svg className="absolute inline-block md:rotate-20 top-[-14%] sm:top-[-11%] md:top-[-18%] left-[9%] md:left-[6%] w-[60px] md:w-[80px] lg:w-[100px] z-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
              <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white" />
            </svg>
            <svg className="absolute inline-block md:-rotate-20 top-[-14%] sm:top-[-11%] left-[-5%] md:left-[-9%] w-[60px] md:w-[80px] lg:w-[100px] z-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
              <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" />
            </svg>
          </div>
          <div className={`${delaySecondRow ? "flex opacity-100 paragraph-animate-left" : "opacity-0"} flex-col justify-center gap-4 w-full`}>
            <h1 className="text-4xl/tight lg:text-5xl/tight font-bold text-center md:text-left">During my <span className="text-green-400">leisure time</span></h1>
            <p className="text-base lg:text-lg text-justify">I honed my HTML and CSS skills to improve my front-end capabilities. Learning the fundamentals was very crucial for me before
              going to the next step, so I decided to test my skills. This was the result.</p>
          </div>
        </section>
        <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 py-10 md:py-15 items-stretch justify-center m-[6%]">
          <div className={`${delayThirdRow ? "flex opacity-100 paragraph-animate-right" : "opacity-0"} flex-col justify-center items-center gap-4 w-full`}>
            <h1 className="text-4xl/tight lg:text-5xl/tight font-bold text-center md:text-left">After my <span className="text-green-400">internship</span></h1>
            <p className="text-base lg:text-lg text-justify">I continued my growth by learning JavaScript. As I created more projects, small may it look, I could feel the
              skill level gradually increasing. This project is where I learned how API works.
            </p>
          </div>
          <div className={`${thirdRow ? "flex opacity-100 paragraph-animate-right" : "opacity-0"} relative justify-center w-full`}>
            <img
              className="rounded-lg object-cover md:-rotate-1 about-img"
              src="./javascript.png"
              alt="Ecommerce Project with basic API"></img>
            <svg className="absolute md:inline-block md:rotate-14 top-[-10%] right-[-5%] w-[60px] md:w-[80px] lg:w-[100px]" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
              <g><path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"></path>
                <path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000">
                </path>
                <path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000">
                </path>
              </g>
            </svg>
          </div>
        </section >
        <section className="flex flex-col gap-8 md:gap-20 py-40 md:py-90 items-stretch justify-center m-[6%]">
          <div className={`${fourthRow ? "flex opacity-100 image-animate" : "opacity-0"} flex-col justify-center items-center gap-4 w-full`}>
            <h1 className="text-4xl/tight lg:text-5xl/tight font-bold"><span className="text-green-400">Right now, I'm..</span></h1>
            <p className="text-base lg:text-lg text-justify md:w-[80%]">embarking on a new journey. As I graduate, I set my sights on the MERN stack and am currently focused on
              learning React.js as part of that roadmap. This portfolio is created using React.js, CSS, and TailwindCSS.
            </p>
          </div>
        </section>
      </div >
    </>
  )
}

export default About;