import { MdSportsSoccer } from "react-icons/md";
import { TbLink } from "react-icons/tb";
import { FiLink } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuCoffee } from "react-icons/lu";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sports Arena Booking System",
      description:
        "A full-stack MERN application for online sports arena booking with role-based authentication for Players, Arena Managers, and Coaches. Players can browse nearby arenas, submit booking requests, Arena Managers assign coaches after approval, coaches manage booking requests, and users complete secure payments through Razorpay. The application also includes JWT authentication, responsive UI, and efficient booking management.",

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
        "REST API",
        "Razorpay",
        "Tailwind CSS",
      ],

      github:
        "https://github.com/nilampanchal603-web/SportsArenaBookingSystem-Frontend",

      backend:
        "https://github.com/nilampanchal603-web/SportsArenaBookingSystem-Backend",
    },

    {
      id: 2,
      title: "BitTree - Linktree Clone",
      description:
        "A full-stack Next.js application that enables users to sign up, log in, and create their own personalized BitTree profile. Users can customize their profile by adding a profile picture, cover image, bio, and multiple social media or website links, all displayed on a single shareable page. The platform also allows users to explore and view BitTree profiles created by others. Built with MongoDB for data storage and Tailwind CSS for a modern, responsive, and user-friendly interface.",
      tech: [
        "Next.js",
        "React",
        "MongoDB",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/nilampanchal603-web/linktree-clone"
    },



    {
      id: 3,
      title: "Password Manager",
      description:
        "A secure password management application built with React that allows users to log in and safely store website credentials, including website URLs, usernames, and passwords. Users can easily manage their saved credentials by copying passwords with a single click or deleting entries when no longer needed. The application features a clean, responsive interface designed for quick and convenient password management.",
      tech: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/nilampanchal603-web/passop-password-manager"
    },
    {
      id: 4,
      title: "Get Me a Chai",
      description:
        "A full-stack crowdfunding platform built with Next.js that enables creators to create their own support page and receive donations from their followers through secure Razorpay payments. Creators can personalize and share their unique support page link, allowing supporters to contribute easily. The application includes authentication, MongoDB integration, payment gateway integration, and a fully responsive user interface.",
      tech: [
        "Next.js",
        "React",
        "MongoDB",
        "Razorpay",
        "NextAuth",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/nilampanchal603-web/get-me-a-chai"
    },
    {
      id: 5,
      title: "BitLinks - URL Shortener",
      description:
        "A Next.js web application that allows users to log in, generate custom short URLs for long website links, and manage all their created links in one place. Users can choose a unique short name for each URL, and visiting the generated short link automatically redirects to the original website. The application uses MongoDB for data storage and provides a clean, responsive user interface.",
      tech: [
        "Next.js",
        "React",
        "MongoDB",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/nilampanchal603-web/bitlinks-url-shortener"
    },


  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="text-sky-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg leading-7">
            Some projects that showcase my skills and learning journey.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-slate-800 border rounded-2xl p-5 sm:p-6 min-h-130 max-w-95 w-full flex flex-col border-slate-700 hover:-translate-y-2 transition duration-300
                 ${project.id === 1 ? "hover:border-sky-400 hover:bg-sky-950/30"
                  : project.id === 2 ? "hover:border-amber-400 hover:bg-amber-950/20"
                    : project.id === 3 ? "hover:border-green-400 hover:bg-green-950/20"
                      : project.id === 4 ? "hover:border-blue-800 hover:bg-blue-950/20"
                        : project.id === 5 ? "hover:border-violet-400 hover:bg-violet-950/20"
                          : "hover:border-slate-500"}
                               `}>
              {/* Title */}
              <div className="mb-4">

                {project.id === 1 ? (
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-sky-500/15">
                      <MdSportsSoccer className="text-3xl text-sky-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold leading-7">
                      {project.title}
                    </h3>
                  </div>

                ) : project.id === 2 ? (
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/15">
                      <TbLink className="text-3xl text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold leading-7">
                      {project.title}
                    </h3>
                  </div>

                ) : project.id === 3 ? (
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-green-500/15">
                      <RiLockPasswordLine className="text-3xl text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold leading-7">
                      {project.title}
                    </h3>
                  </div>

                ) : project.id === 4 ? (
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-800/20">
                      <LuCoffee className="text-3xl text-blue-800" />
                    </div>
                    <h3 className="text-xl font-bold leading-7">
                      {project.title}
                    </h3>
                  </div>

                ) : project.id === 5 ? (
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-violet-500/15">
                      <FiLink className="text-3xl text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold leading-7">
                      {project.title}
                    </h3>
                  </div>

                ) : (
                  <h3 className="text-xl font-bold leading-7">
                    {project.title}
                  </h3>
                )}

              </div>


              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-7 grow">
                {project.description}
              </p>


              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className=" bg-slate-700 text-sky-400 px-3 py-1 rounded-full text-xs ">
                    {tech}
                  </span>
                ))}

              </div>


              {/* Buttons */}
              <div className="mt-auto pt-5">

                {project.id === 1 ? (

                  <div className="flex flex-wrap gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-sky-500 hover:bg-sky-600 px-5 py-2.5 rounded-lg text-sm font-medium transition">
                      GithubF
                    </a>

                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-sky-500  text-sky-400 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition ">
                      GithubB
                    </a>

                  </div>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg text-sm font-medium transition ">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;