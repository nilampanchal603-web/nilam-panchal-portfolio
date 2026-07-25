 function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Building Modern &
            <br />
            Scalable Web Applications
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mt-6 sm:mt-8 max-w-3xl mx-auto">
            Learn more about my journey, technical skills, and how I build
            responsive, scalable, and user-friendly web applications using the
            MERN Stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-10 items-stretch">

          {/* Left Side */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-sky-400 transition duration-300">

            <span className="inline-block px-4 py-2 rounded-full bg-sky-500/20 text-sky-400 text-sm font-medium mb-6 sm:mb-8">
              MERN Stack Developer
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 sm:mb-8">
              Hi, I'm
              <span className="text-sky-400"> Nilam Panchal</span>
            </h3>

            <p className="text-gray-400 leading-7 sm:leading-8 mb-5 sm:mb-6 text-sm sm:text-base">
              I'm <span className="text-white font-semibold">Nilam Panchal</span>, a
              passionate MERN Stack Developer and Computer Engineering graduate with
              hands-on experience in building modern, responsive, and scalable full-stack
              web applications.
            </p>

            <p className="text-gray-400 leading-7 sm:leading-8 mb-5 sm:mb-6 text-sm sm:text-base">
              During my internships at
              <span className="text-sky-400 font-medium">
                {" "}CreArt Solution Pvt. Ltd.
              </span>
              {" "}and
              <span className="text-sky-400 font-medium">
                {" "}Grownited Private Ltd.
              </span>,
              I worked on real-world MERN Stack projects, where I developed responsive
              user interfaces using React.js, built RESTful APIs with Node.js and
              Express.js, managed MongoDB databases, implemented JWT authentication,
              integrated frontend with backend services, and collaborated with development
              teams using Git and GitHub.
            </p>

            <p className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base">
              I enjoy solving real-world problems through clean, efficient, and scalable
              code. I am always eager to learn new technologies, improve my development
              skills, and contribute to impactful projects while growing as a Full Stack
              Developer.
            </p>

          </div>

          {/* Right Side */}
          <div className="space-y-5">

            <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-6 sm:p-7 hover:border-sky-400 transition duration-300 h-full">

              <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs text-sky-400 font-semibold mb-5">
                Core Focus
              </p>

              <div className="space-y-6">

                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Frontend Development
                  </h4>

                  <p className="text-gray-400 mt-2 leading-7 text-sm sm:text-base">
                    Building responsive and modern user interfaces using React.js,
                    HTML5, CSS3, Tailwind CSS and JavaScript.
                  </p>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Backend Development
                  </h4>

                  <p className="text-gray-400 mt-2 leading-7 text-sm sm:text-base">
                    Developing REST APIs and scalable backend applications using
                    Node.js, Express.js and MongoDB.
                  </p>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Problem Solving
                  </h4>

                  <p className="text-gray-400 mt-2 leading-7 text-sm sm:text-base">
                    Writing clean, maintainable code while continuously learning
                    new technologies and best practices.
                  </p>
                </div>

                <div className="border-t border-slate-700 pt-4">

                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    Experience
                  </h4>

                  <div className="space-y-3">

                    <div>
                      <h5 className="text-sky-400 font-medium text-sm sm:text-base">
                        Grownited Private Ltd.
                      </h5>

                      <p className="text-gray-400 text-sm">
                        MERN Stack Developer Intern • 3 Months
                      </p>
                    </div>

                    <div className="border-t border-slate-700 pt-3">
                      <h5 className="text-sky-400 font-medium text-sm sm:text-base">
                        CreArt Solution Pvt. Ltd.
                      </h5>

                      <p className="text-gray-400 text-sm">
                        MERN Stack Developer Intern
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;