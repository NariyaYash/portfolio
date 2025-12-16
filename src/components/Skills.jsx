import React from 'react'
import imghero from '../assets/heroBgImageAdam.png'

function Skills() {
  return (
    <section id='skills' className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">

      <div>
        {/* Background Glow */}
        <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-50 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

        {/* Decorative Image */}
        <img
          src={imghero}
          alt="Left picture"
          className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 sm:w-32 opacity-70"
        />

        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="relative z-20 text-center space-y-6 sm:space-y-10 max-w-3xl"
        >
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold">
              My Expertise <br />
              and <span className="text-purple-400">Skills</span>
            </h1>

            <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
              I specialize in building modern, scalable, and responsive web applications
              using Angular and React. My focus is on writing clean, maintainable code and
              delivering smooth user experiences through reusable UI components and
              optimized frontend architecture.
            </p>
          </header>

          <section data-aos="fade-left"
            data-aos-delay="300">
            {/* Skills Pills */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                "Angular",
                "React",
                "JavaScript",
                "Tailwind CSS",
                "REST APIs",
                "JWT Auth",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-purple-400/40 rounded-full text-white hover:bg-purple-400/10 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
        {/* Decorative Image */}
        <img
          src={imghero}
          alt="right picture"
          className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
        />
      </div>

    </section>

  )
}

export default Skills