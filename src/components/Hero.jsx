 import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center py-16 lg:py-0"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center lg:-translate-y-10">
        
        {/* Left Content */}
        <div className="py-6 text-center lg:text-left">
          <h1 className="font-bold leading-tight">
            <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-3 blur-[0.5px]">
              Nilam Panchal
            </span>

            <span className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-400">
              MERN Stack
              <br className="hidden sm:block" />
              Developer
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mt-8 max-w-xl mx-auto lg:mx-0">
            I build{" "}
            <span className="text-white font-medium">
              modern, responsive, and scalable
            </span>{" "}
            web applications using the MERN Stack. Passionate about creating
            clean UI, writing efficient code, and delivering seamless user
            experiences with React, Node.js, Express.js, and MongoDB.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <a
                href="/Nilam_Panchal_s_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-sky-500/40"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-7 py-3 rounded-lg font-semibold transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end items-center">
          <img
            src={profile}
            alt="Profile"
            className="w-64 sm:w-72 md:w-80 lg:w-85 h-auto rounded-xl object-cover border-4 border-gray-500 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;