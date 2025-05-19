import illustration from "../images/illustration-working.svg";

const Showcase = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24">
      
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
          More than just <br className="hidden md:block" /> shorter links
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-md md:max-w-none mb-8">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className="bg-[#2BD1D1] hover:bg-[#9be3e2] transition text-white font-bold rounded-full px-8 py-3 text-sm md:text-base">
          Get Started
        </button>
      </div>

      {/* Right: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
        <img
          src={illustration}
          alt="Working illustration"
          className="w-full max-w-[400px] md:max-w-[500px]"
        />
      </div>
      
    </section>
  );
};

export default Showcase;
