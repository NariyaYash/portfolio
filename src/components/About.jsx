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
                <article className="relative text-center" data-aos="fade-left"
                    data-aos-delay="250">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        About Me
                    </h2>

                    <div className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed space-y-6">
                        <p>
                            I’m a <span className="text-white font-medium">Frontend Developer</span> with
                            <span className="text-[#cd3cf5] font-semibold"> 1+ years of experience</span> building
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