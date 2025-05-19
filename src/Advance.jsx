import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

const Advance = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 lg:py-20">
        <div className="max-width">
          <div>
            <h2 className="text-2xl md:text-4xl text-center poppins-bold">
              Advanced Statistics
            </h2>
            <p className="text-center text-[#A7A4AA] poppins mb-10 lg:mb-20 mt-2 leading-relaxed">
  Track how your links are performing across the web with
  <span className="hidden lg:inline"><br /></span>
  <span className="block lg:inline">our advanced statistics dashboard.</span>
</p>


          </div>

          
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-5">
           
            <div className="absolute top-20 bottom-0 left-1/2 w-2 bg-[#2ACFCF] md:hidden -translate-x-1/2 z-0"></div>

           
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-[#2ACFCF] z-0"></div>

            <article className="relative z-10 bg-white rounded-lg shadow-lg p-5 text-center md:text-left flex flex-col items-center md:items-start lg:mb-5 max-w-sm w-full">
              <div className="p-5 -mt-12 w-16 h-16 bg-[#3B2F55] rounded-full flex items-center justify-center">
                <img src={brand} alt="icon" />
              </div>
              <h3 className="text-lg poppins-bold mt-5">Brand Recognition</h3>
              <p className="text-[#A7A4AA] poppins mt-3">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>

            <article className="relative z-10 bg-white rounded-lg shadow-lg p-5 text-center md:text-left flex flex-col items-center md:items-start lg:mt-10 max-w-sm w-full">
              <div className="p-5 -mt-12 w-16 h-16 bg-[#3B2F55] rounded-full flex items-center justify-center">
                <img src={detailed} alt="icon" />
              </div>
              <h3 className="text-lg poppins-bold mt-5">Detailed Records</h3>
              <p className="text-[#A7A4AA] poppins mt-3">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>

            <article className="relative z-10 bg-white rounded-lg shadow-lg p-5 text-center md:text-left flex flex-col items-center md:items-start lg:mt-20 max-w-sm w-full">
              <div className="p-5 -mt-12 w-16 h-16 bg-[#3B2F55] rounded-full flex items-center justify-center">
                <img src={customizable} alt="icon" />
              </div>
              <h3 className="text-lg poppins-bold mt-3 lg:mt-5">Fully Customizable</h3>
              <p className="text-[#A7A4AA] poppins mt-3">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advance;
