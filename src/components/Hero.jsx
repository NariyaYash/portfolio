import Navbar from './Navbar'
import faceBook from "../assets/facebook.png"
import github from "../assets/github.png"
import yash from "../assets/yash.png"
import hoverYash from "../assets/yash_hover.png"
// import yash from "../../public/heroBgImageAdam.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import cv from "../assets/resume_yash.pdf"

function Hero() {
    return (
        <div className='relative overflow-hidden min-h-[550px] flex flex-col items-center'>
            <div className='lg:block hidden md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] z-0 right-35 top-32 rounded-3xl transform rotate-35 '>
            </div>
            <Navbar />
            <main id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-30 pb-4 sm:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10 '>
                <section className='flex-1  md:text-left relative' data-aos="fade-up" data-aos-delay="500">
                    <div className='lg:block hidden absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full  blur-3xl opacity-50 top-20 -bg-conic-0left-12'></div>
                    <header className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                        <div className='lg:order-1 order-2 md:mt-20 mt-0'>
                            <h1 className='text-4xl md:text-5xl sm:text-4xl font-bold text-white mb-4'>
                                Hi, I’m Yash Nariya
                            </h1>
                            <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#c743e8] md:text-[#c744ec] mb-2'>
                                Frontend Developer
                            </h2>
                            <p className='max-w-2xl text-base sm:text-lg text-gray-200  lg:text-lg mb-6'>
                                Frontend Developer with 2 years of experience building scalable,
                                responsive, and high-performance web applications using Angular and React.
                                Passionate about clean UI, reusable components, and seamless user experience.
                            </p>
                            <div className="flex items-center space-x-5 mb-6 mt-10">
                                <a href='https://github.com/NariyaYash' target='_blank'>
                                    <img src={github} className='w-11 h-11 cursor-pointer' />
                                </a>
                                <a href='https://www.linkedin.com/in/yash-nariya-a3359424b/' target='_blank'>
                                    <img src={linkedin} className='w-11 h-11 cursor-pointer' />
                                </a>
                                <a href='https://www.instagram.com/ysh_172005'  target='_blank'>
                                    <img src={instagram} className='w-11 h-11 cursor-pointer'/>
                                </a>
                            </div>
                            <a href={cv} download>
                                <button className='text-white cursor-pointer border-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800  text-lg'>
                                    Download CV
                                </button>
                            </a>
                        </div>
                        <figure
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="group relative cursor-pointer  lg:order-2 order-1 flex flex-1 justify-center items-center lg:justify-end md:mt-10 mt-0"
                        >
                            {/* Default image */}
                            <img
                                src={yash}
                                alt="Yash Nariya"
                                className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-xl transition-opacity duration-500"
                            />

                            {/* Hover image */}
                            <img
                                src={hoverYash}
                                alt="Yash Nariya Hover"
                                className="absolute top-0  h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </figure>

                    </header>
                </section>
            </main>
        </div>
    )
}

export default Hero