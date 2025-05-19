import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

const Advance = () => {
  return (
    <section className="bg-gray-100 py-14 lg:py-24">
      <div className="max-width px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl poppins-bold">
            Advanced Statistics
          </h2>
          <p className="text-[#A7A4AA] poppins mt-3 mb-12 lg:mb-24 leading-relaxed">
            Track how your links are performing across the web with{" "}
            <span className="hidden lg:inline"><br /></span>
            <span className="block lg:inline">our advanced statistics dashboard.</span>
          </p>
        </div>

        {/* Cards + Line */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-6">
          {/* Mobile Vertical Line */}
          <div className="absolute top-20 bottom-0 left-1/2 w-2 bg-[#2ACFCF] md:hidden -translate-x-1/2 z-0" />

          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-[50%] left-0 right-0 h-2 bg-[#2ACFCF] z-0" />

          {/* CARD 1 */}
          <article className="relative z-10 bg-white rounded-lg shadow-lg p-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="p-5 -mt-14 w-16 h-16 bg-[#3B2F55] rounded-full flex items-center justify-center">
              <img src={brand} alt="Brand Icon" />
            </div>
            <h3 className="text-lg poppins-bold mt-5">Brand Recognition</h3>
            <p className="text-[#A7A4AA] poppins mt-3 text-sm leading-relaxed">
              Boost your brand recognition with each click. Generic links
              don't mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>

          {/* CARD 2 */}
          <article className="relative z-10 bg-white rounded-lg shadow-lg p-6 text-center md:text-left flex flex-col items-center md:items-start md:mt-10">
            <div className="p-5 -mt-14 w-16 h-16 bg-[#3B2F55] rounded-full flex items-center justify-center">
              <img src={detailed} alt="Detailed Icon" />
            </div>
            <h3 className="text-lg poppins-bold mt-5">Detailed Records</h3>
            <p className="text-[#A7A4AA] poppins mt-3 text-sm leading-relaxed">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>

          {/* CARD 3 */}
          <article className="relative z-10 bg-white rounded-lg shadow-lg p-6 text-center md:text-left flex flex-col items-center md:items-start md:mt-20">
            <div className="p-5 -mt-14 w-16 h-16 bg-[#3B2F55] rounded-full flex items-center justify-center">
              <img src={customizable} alt="Custom Icon" />
            </div>
            <h3 className="text-lg poppins-bold mt-5">Fully Customizable</h3>
            <p className="text-[#A7A4AA] poppins mt-3 text-sm leading-relaxed">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Advance;
