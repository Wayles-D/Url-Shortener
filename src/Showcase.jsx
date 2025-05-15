import illustration from "../images/illustration-working.svg";

const Showcase = () => {
  return (
    <section className="max-width mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between text-center md:text-left py-8 md:py-24 px-4 md:px-12">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-8 leading-tight">
          More than just<br className="hidden md:block" /> shorter links
        </h1>
        <p className="text-gray-500 mb-8 md:mb-10 text-base md:text-2xl max-w-xl">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className="bg-[#2BD1D1] text-white font-bold rounded-full px-8 py-3 text-base md:text-xl hover:bg-[#9be3e2] transition">
          Get Started
        </button>
      </div>
      {/* Right: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={illustration}
          alt="Working illustration"
          className="w-11/12 max-w-xs md:max-w-xl"
        />
      </div>
    </section>
  );
};

export default Showcase;