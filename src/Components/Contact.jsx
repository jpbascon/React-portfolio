
const Contact = ({ dropDownOpen }) => {
  return (
    <>
      <div className={"flex flex-col md:flex-row items-center justify-center m-[6%] mt-[3rem] md:mt-[15rem] projects-wrapper" + (dropDownOpen ? " active" : " ")}>
        <section className="flex items-stretch gap-6 md:gap-[10rem]">
          <div className="flex flex-col gap-10 justify-center items-center w-full paragraph-animate-right">
            <h1 className="text-4xl/tight lg:text-6xl/tight font-bold text-center md:text-left"><span className="text-green-400">Interested?</span> Give me a <span className="text-green-400">call </span>or fill out this <span className="text-green-400">form</span></h1>
            {/* <p className="text-4xl/tight lg:text-5xl/tight font-bold text-center md:text-left w-full">+63 <span className="text-green-400">9760566673</span></p> */}
          </div>
          <div className="flex justify-center items-center w-full">
            <form
              className="flex flex-col gap-4 w-full px-8 py-7 rounded-md form paragraph-animate-left">
              <div className="w-full">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full border-b-4 border-neutral-800 hover:border-green-400 focus:border-green-400 transition-all outline-0 input"
                  type="text"
                  name="email" />
              </div>
              <div className="w-full">
                <label htmlFor="message">Message</label>
                <input
                  className="w-full border-b-4 border-neutral-800 hover:border-green-400 focus:border-green-400 transition-all outline-0 input"
                  type="text"
                  name="message" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact;