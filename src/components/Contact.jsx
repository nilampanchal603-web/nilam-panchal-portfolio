 import {FaEnvelope,FaLinkedin,FaGithub,} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact <span className="text-sky-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg leading-7 max-w-2xl mx-auto">
            I'm looking for internship and job opportunities where I can apply
            my skills, learn, and grow as a developer.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 lg:p-10 text-center">

            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Let's Work Together
            </h3>

            <p className="text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-base leading-7">
              I'm excited to work on meaningful projects, improve my skills,
              and contribute as a developer.
            </p>

            {/* Social Links */}
            <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mt-10 sm:mt-12">

              {/* GitHub */}
              <a
                href="https://github.com/nilampanchal603-web"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-700 p-3 sm:p-4 rounded-full hover:bg-sky-500 transition duration-300">
                <FaGithub className="text-xl sm:text-2xl" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nilam-panchal-627ba135b/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-700 p-3 sm:p-4 rounded-full hover:bg-sky-500 transition duration-300">
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>

              {/* Email */}
              <a
                href="nilampanchal603@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-700 p-3 sm:p-4 rounded-full hover:bg-sky-500 transition duration-300">
                <FaEnvelope className="text-xl sm:text-2xl" />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-700 mt-20 sm:mt-24 lg:mt-32 pt-6 sm:pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5">

            <p className="text-gray-400 text-center text-sm sm:text-base">
              © 2026{" "}
              <span className="text-sky-400 font-semibold">
                Nilam Panchal
              </span>
              . All Rights Reserved.
            </p>

            <p className="text-gray-400 text-center text-sm sm:text-base">
              Made with ❤️ using React & Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;