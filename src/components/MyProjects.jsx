import React from 'react'
import cover_mitra from '../assets/projects_img/cover_mitra.png'
import forex_traders from '../assets/projects_img/tft.png'
import chat_with_ai from '../assets/projects_img/chat_with_ai.png'


const ProjectCard = ({ image, title, description, tech, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg group">
      {/* Purple Glow */}
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-5 left-10"></div>

      {/* Image Section */}
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white text-black font-medium py-2 px-5 rounded-3xl shadow hover:bg-[#2879d5] hover:text-white transition">
              Live Preview
            </button>
          </a>
        </figure>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-4 space-y-3">
        <h3 className="text-white font-bold text-xl">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 border border-purple-400/40 rounded-full text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

function MyProjects() {
  const listProjects = [
    {
      image: cover_mitra,
      title: "COVER MITRA",
      description:
        "An insurance management web application focused on clean UI, reusable components, and REST API integration.",
      tech: ["React", "Tailwind CSS", "React-icons", "react-router-dom", "react-hook-form"],
      link: "https://cover-mitra.vercel.app/",
    },
    {
      image: forex_traders,
      title: "TOP FOREX TRADER",
      description:(
          <>
            Developed a secure business management platform featuring <strong>JWT authentication, admin/employee panels, Excel export </strong>for reports, efficient employee management, and dynamic forms.
          </>
        ),
      tech: ["Angular", "Node js", "REST API", "JWT-auth", "Excel export"],
      link: "https://hiringtraders.com/adminLogin",
    },
    {
      image: chat_with_ai,
      title: "CHAT WITH AI",
      description: (
        <>
          Developed an <strong>AI chat application</strong> using <strong>Next.js</strong> that enables users to interact with an AI agent in real time. Integrated <strong>Gemini 2.5 Flash Lite from Google Generative AI </strong>to generate responses, focusing on smooth and natural general conversational interactions through a responsive web interface.
        </>
      ),
      tech: ["Next JS", "REST API", "Google Generative AI (Gemini 2.5 Flash Lite)"],
      link: "https://chat-with-ai-tau.vercel.app/",
    },
  ];

  return (
    <main className='pt-0 pr-20 pl-20 pb-20' id='projects'>
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Some of the projects I’ve worked on recently
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>

    </main>
  )
}

export default MyProjects