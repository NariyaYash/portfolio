import aboutImage from '../assets/about_2.jpg'

function About() {
    return (
        <div id='about' className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-30 pb-4 sm:pb-24 md:pt-32 pt-24 mt-14'>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center justify-center">
                <figure className='flex flex-wrap justify-center gap-4 relative' data-aos='fade-right' data-aos-delay="250">
                    <img
                        src={aboutImage}
                        alt="About section"
                        className='transform -translate-y-0 z-30 rounded-xl shadow-amber-50'
                    />
                </figure>
                {/* <article
                    className="text-center lg:text-center relative"
                    data-aos="fade-left"
                    data-aos-delay="250"
                >
                    <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-40"></div>

                    <header className="relative z-10 mb-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white">
                            About Me
                        </h1>
                    </header>

                    <div className="relative z-10 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed space-y-4">
                        <p>
                            I am a Frontend Developer with over 2 years of professional experience
                            specializing in Angular and React. I have worked on building modern,
                            responsive, and user-friendly web applications for real-world business needs.
                        </p>

                        <p>
                            I focus on writing clean, maintainable code and creating reusable UI components
                            that improve performance and reduce development time. I enjoy transforming
                            complex requirements into intuitive and engaging user interfaces.
                        </p>

                        <p>
                            I have experience working with REST APIs, authentication, third-party
                            integrations, and modern UI libraries. I am always eager to learn new
                            technologies and improve my skills as a developer.
                        </p>
                    </div>
                </article> */}
                <article className="relative text-center" data-aos="fade-left"
                    data-aos-delay="250">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        About Me
                    </h2>

                    <div className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed space-y-6">
                        <p>
                            I’m a <span className="text-white font-medium">Frontend Developer</span> with
                            <span className="text-[#cd3cf5] font-semibold"> 2+ years of experience</span> building
                            modern, responsive, and high-performance web applications using
                            <span className="text-white font-medium"> Angular and React</span>.
                        </p>

                        <p>
                            I specialize in creating clean, reusable UI components and writing
                            maintainable code that improves performance and reduces development time.
                        </p>

                        <p>
                            I have hands-on experience with REST APIs, authentication, third-party
                            integrations, and modern UI libraries, and I’m always eager to learn
                            new technologies and grow as a developer.
                        </p>
                    </div>
                </article>
            </div>
        </div>

    )
}

export default About