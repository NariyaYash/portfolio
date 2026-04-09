import React from 'react'
import cover_mitra from '../assets/projects_img/cover_mitra.png'
import forex_traders from '../assets/projects_img/tft.png'
import chat_with_ai from '../assets/projects_img/chat_with_ai.png'
import job_prep_ai from '../assets/projects_img/job_prep_ai.png'

// Updated ProjectCard: Ensuring width is 100% on mobile
const ProjectCard = ({ image, title, description, tech, link }) => {
  return (
    <article className="relative w-full sm:max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg group">
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
      <div className="relative z-10 px-4 sm:px-6 py-4 space-y-3">
        <h3 className="text-white font-bold text-lg sm:text-xl">
          {title}
        </h3>
        <div className="text-gray-400 text-sm leading-relaxed">
          {description}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 border border-purple-400/40 rounded-full text-white"
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
      image: job_prep_ai,
      title: "JOB PREP AI",
      description: "Job Prep AI is an automated MERN-stack platform that uses Google Gemini AI to analyze resumes and job descriptions to generate personalized interview plans, technical questions, and skill gap insights.",
      tech: ["React", "SCSS", "Node.js", "MongoDB", "Google Gemini AI", "Sass"],
      link: "https://job-prep-ai-client.vercel.app/",
    },
    {
      image: cover_mitra,
      title: "COVER MITRA",
      description: "An insurance management web application focused on clean UI, reusable components, and REST API integration.",
      tech: ["React", "Tailwind CSS", "React-icons", "react-router-dom", "react-hook-form"],
      link: "https://cover-mitra.vercel.app/",
    },
    {
      image: chat_with_ai,
      title: "CHAT WITH AI",
      description: (
        <>
          Developed an <strong>AI chat application</strong> using <strong>Next.js</strong> and <strong>Gemini 2.5 Flash Lite</strong> for real-time interaction.
        </>
      ),
      tech: ["Next JS", "REST API", "Google AI"],
      link: "https://chat-with-ai-tau.vercel.app/",
    },
    {
      image: forex_traders,
      title: "TOP FOREX TRADER",
      description: (
        <>
          Developed a secure business management platform featuring <strong>JWT authentication, admin/employee panels, Excel export </strong>for reports.
        </>
      ),
      tech: ["Angular", "Node js", "REST API", "JWT-auth", "Excel export"],
      link: "https://hiringtraders.com/adminLogin",
    },
    // Don't forget to add your new Job Prep AI project here!
  ];

  return (
    /* Changed padding to be responsive: px-6 for mobile, px-20 for desktop */
    <main className='py-10 px-6 md:px-20 lg:px-32' id='projects'>
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

      {/* Grid layout: 1 column on mobile, 2 on tablets, 3 on desktops */}
      <section
        data-aos="fade-up"
        data-aos-delay="300"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </main>
  )
}

export default MyProjects