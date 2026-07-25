 
 import { MdOutlineWeb } from "react-icons/md";
import { TbServer } from "react-icons/tb";
import { TbDatabaseCog } from "react-icons/tb";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Technical <span className="text-sky-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-5 text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto">
            Technologies and tools I use to design, develop and deploy
            responsive full-stack web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Frontend */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 w-full hover:border-sky-400 transition duration-300">

            <div className="flex items-center gap-3 mb-5">
              <MdOutlineWeb className="text-2xl text-sky-400" />

              <h3 className="text-lg font-bold text-sky-400">
                Frontend
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-sm font-medium">

              <div className="bg-slate-800 rounded-lg py-2 text-center">HTML5</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">CSS3</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">JavaScript</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">React.js</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">Next.js</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">Tailwind CSS</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">Bootstrap</div>

            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 w-full hover:border-sky-400 transition duration-300">

            <div className="flex items-center gap-3 mb-5">
              <TbServer className="text-2xl text-sky-400" />

              <h3 className="text-lg font-bold text-sky-400">
                Backend
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-sm font-medium">

              <div className="bg-slate-800 rounded-lg py-2 text-center">Node.js</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">Express.js</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">REST API</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">JWT Auth</div>

            </div>
          </div>

          {/* Database & Tools */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 w-full hover:border-sky-400 transition duration-300">

            <div className="flex items-center gap-3 mb-5">
              <TbDatabaseCog className="text-2xl text-sky-400" />

              <h3 className="text-lg font-bold text-sky-400">
                Database & Tools
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-sm font-medium">

              <div className="bg-slate-800 rounded-lg py-2 text-center">MongoDB</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">Mongoose</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">Git</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">GitHub</div>
              <div className="bg-slate-800 rounded-lg py-2 text-center">Postman</div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;