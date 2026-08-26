import React, { useState, useEffect } from "react";
import navbar from "../assets/hamburger-navbar.svg";
import navbarActive from "../assets/hamburger-navbar-active.svg";
import imgProfile2 from "../assets/foto-profil-2.jpg"
import bgHeader from "../assets/circle-header.png"
import logoLinkedin from "../assets/logo-linkedin.svg";
import logoGithub from "../assets/logo-github-white.svg";
import logoEmail from "../assets/logo-email.svg";
import { projects } from "../data/projects";
import CardProject from "../components/CardProject";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleToggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  function handleNavClick() {
    setMenuOpen(false);
  }


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div className="relative">
        {/* NAVBAR */}
        <nav id="navbar" className={`sticky top-0 z-50 text-white ${isScrolled ? 'border-b border-white/90 bg-dark-primary transition-all duration-100 ease-in-out' : 'bg-transparent transition-all duration-100 ease-in-out'}`}>
          <div className="flex justify-between items-center px-5 h-[70px] sm:h-[80px] md:h-[88px] md:px-10 lg:px-20">
            <h2 className="text-xl sm:text-2xl font-medium">My Profile</h2>

            <div className="size-9 sm:size-10 md:hidden">
              <button onClick={ handleToggleMenu } className="w-full h-full relative">
                <img 
                  src={ navbar } 
                  alt="menu" 
                  className={`absolute inset-0 size-full transition duration-500 ease-in-out  ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <img 
                  src={ navbarActive } 
                  alt="menu" 
                  className={`absolute inset-0 size-full transition duration-500 ease-in-out  ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
                />
              </button>
            </div>

            <ul className="hidden md:flex space-x-4 lg:space-x-6 text-base lg:text-lg">
              <li className="hover:underline cursor-pointer hover:text-gold transition-colors"><a href="#about">About</a></li>
              <li className="hover:underline cursor-pointer hover:text-gold transition-colors"><a href="#projects">Projects</a></li>
              <li className="hover:underline cursor-pointer hover:text-gold transition-colors"><a href="#social-link">Social Link</a></li>
            </ul>
          </div>

          {/* Mobile Dropdown Menu */}
          <div 
            className={`px-0 absolute w-full border-t border-white/50 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-dvh opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="w-full flex flex-col bg-dark-primary text-base sm:text-lg font-medium shadow-inner divide-y divide-white/50 border-b border-b-white">
              <li className="py-3 sm:py-4">
                <p className="hover:text-gold transition duration-200 cursor-pointer text-center">
                  <a href="#about" onClick={handleNavClick}>
                    About
                  </a>
                </p>
              </li>
              <li className="py-3 sm:py-4">
                <p className="hover:text-gold transition duration-200 cursor-pointer text-center">
                  <a href="#projects" onClick={ handleNavClick }>Projects</a>
                </p>
              </li>
              <li className="py-3 sm:py-4">
                <p className="hover:text-gold transition duration-200 cursor-pointer text-center">
                  <a href="#social-link" onClick={ handleNavClick }>Social Link</a>
                </p>
              </li>
            </ul>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="jumbotron" className="relative min-h-[106vh] flex items-center justify-center overflow-hidden -mt-30 py-16 sm:py-20  md:-mt-7 sm:min-h-dvh">
          {/* Animated Background Elements */}
          <div className="absolute size-64 sm:size-80 md:size-96 bottom-[10%] left-0 -translate-x-[51.5%] bg-center bg-cover pointer-events-none opacity-20 sm:opacity-30 animate-pulse" 
            style={{ backgroundImage: `url(${bgHeader})` }} 
          />
          {/* <div className="absolute size-64 sm:size-80 md:size-96 bottom-[10%] -left-33 sm:-left-[26%] md:-left-50 bg-center bg-cover pointer-events-none opacity-20 sm:opacity-30 animate-pulse" 
            style={{ backgroundImage: `url(${bgHeader})` }} 
          /> */}
          <div className="absolute size-64 sm:size-80 md:size-96 bottom-1/4 right-0 translate-x-[52%] bg-center bg-cover pointer-events-none opacity-20 sm:opacity-30 animate-pulse delay-1000" 
            style={{ backgroundImage: `url(${bgHeader})` }} 
          />
          
          {/* Content */}
          <div className="relative z-20 text-center px-4 sm:px-6 space-y-6 sm:space-y-8 max-w-4xl mx-auto -pt-20 sm:-pt-10">
            <div className="relative inline-block">
              <img 
                src={imgProfile2} 
                alt="Profile" 
                className="size-36 sm:size-44 md:size-48 lg:size-56 rounded-full object-cover mx-auto border-3 sm:border-4 border-gold shadow-2xl shadow-gold/20" 
              />
              <div className="absolute inset-0 rounded-full border-3 sm:border-4 border-gold/30 animate-ping"></div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair tracking-wide px-2">
                Rifki Taufikurrohman
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gold font-light">Front-End Developer</p>
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold"></div>
              </div>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                Software Engineering Student
              </p>
            </div>
           
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative scroll-mt-16 sm:scroll-mt-[4.5] min-h-dvh px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16">
          <div className="hidden absolute size-90 top-[55%] right-[6%] translate-y-1/2 bg-center bg-cover pointer-events-none brightness-[44%] md:block" style={{ backgroundImage: `url(${bgHeader})` }}></div>
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 overflow-hidden">
            {/* Section Header */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">About Me</h2>
              <div className="inline-block">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair">
                  Crafting Digital Experiences
                </h3>
                <div className="w-full h-1 mt-4 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left Side - Description */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-navbar/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    I am a passionate <span className="text-gold font-semibold">Software Engineering student</span> at Telkom University Purwokerto, specializing in front-end web development. I love creating beautiful, responsive, and user-friendly interfaces.
                  </p>
                </div>
                
                <div className="bg-navbar/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">What I Do</h4>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-gold mt-1">▹</span>
                      <span>Building responsive web applications</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-gold mt-1">▹</span>
                      <span>Creating modern UI/UX designs</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-gold mt-1">▹</span>
                      <span>Learning new technologies</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Skills */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-navbar/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {['Javascript', 'TypeScript', 'HTML/CSS', 'React JS', 'TailwindCSS', 'MySQL', 'Git'].map((skill) => (
                      <div key={skill} className="bg-dark-primary/50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gold/10 hover:border-gold/30 transition-all text-center">
                        <span className="text-gold font-medium text-sm sm:text-base">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="relative scroll-mt-13 sm:scroll-mt-10 px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 md:pb-0 bg-navbar/30"
        >
          {/* <div className="absolute size-50 bg-center bg-cover pointer-events-none " style={{ backgroundImage: `url(${bgHeader})` }} /> */}

          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 ">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4 text-start">
              <h2 className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">
                Portfolio
              </h2>
              <div className="inline-block">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair">
                  Featured Projects
                </h3>
                <div className="w-full h-1 mt-4 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              </div>
            </div>

            {/* Projects (FLEX) */}
            <div className="flex flex-wrap justify-center p-4 gap-y-6 sm:gap-10 sm:p-0 lg:gap-17 pb-8">
              {projects.map((item) => (
                <CardProject
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  techStack={item.techStack}
                  linkDemo={item.LinkDemo}
                />
              ))}
            </div>

          </div>
        </section>


        {/* Social Link SECTION */}
        <section id="social-link" className="relative -scroll-mt-16 min-h-dvh px-4 sm:px-6 md:px-10 lg:px-20 pt-16 sm:pt-18 md:pt-22 flex items-center overflow-hidden">

          <div className="absolute size-64 sm:size-80 md:size-96 top-[1%] sm:bottom-1/4 left-0 -translate-x-[52%] bg-center bg-cover pointer-events-none opacity-20 sm:opacity-30 animate-pulse" 
            style={{ backgroundImage: `url(${bgHeader})` }} 
          />

          <div className="absolute size-64 sm:size-80 md:size-96 bottom-0 right-0 translate-x-[52%] bg-center bg-cover pointer-events-none opacity-20 sm:opacity-30 animate-pulse" style={{ backgroundImage: `url(${bgHeader})` }}/>

          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 w-full">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">Get In Touch</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair">
                Let's Work Together
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </div>

            <div className="flex gap-4 sm:gap-6 justify-center flex-wrap pt-6 sm:pt-8">
              {/* Social Links */}
              <a href="https://www.linkedin.com/in/rifkitaufik23/" className="group size-14 sm:size-20 p-2 flex items-center justify-center border border-gold/20 rounded-full hover:border-gold/60 hover:bg-gold/10 transition-all md:hover:scale-110 active:scale-95 active:bg-gold/20">
                <img 
                  src={logoLinkedin} alt="" className="size-8 sm:size-10 object-contain sm:brightness-1000 md:group-hover:brightness-100 transition ease-in-out duration-200"
                />
              </a>
              <a href="https://github.com/rifkitaufikurrohman" target="_blank" className="group size-14 sm:size-20 p-2 flex items-center justify-center bg-navbar/50 border border-gold/20 rounded-full hover:border-gold/60 hover:bg-gold/10 transition-all md:hover:scale-110 active:scale-95 active:bg-gold/20" >
                <img src={ logoGithub } alt="" className="size-8 sm:size-10 object-contain sm:brightness-100 sm:group-hover:brightness-0 transition ease-in-out duration-200"/>
              </a>
              <a href="mailto://rifkitmn23@gmail.com" className="group size-14 sm:size-20 p-2 flex items-center justify-center bg-navbar/50 border border-gold/20 rounded-full hover:border-gold/60 hover:bg-gold/10 transition-all md:hover:scale-110 active:scale-95 active:bg-gold/20">
                <img 
                  src={ logoEmail } alt="" className="size-8 sm:size-10 object-contain sm:brightness-1000 group-hover:brightness-100   transition ease-in-out duration-200"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
