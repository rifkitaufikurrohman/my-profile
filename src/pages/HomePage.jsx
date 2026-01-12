import React, { useState, useEffect } from "react";
import navbar from "../assets/hamburger-navbar.svg";
import navbarActive from "../assets/hamburger-navbar-active.svg";
// import imgProfile from "../assets/img-png.png"
import imgProfile from "../assets/img-2.jpg"
import bgHeader from "../assets/circle-header.png"

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleToggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  });

  return (
    <>
      <div className="relative h-[2000px]">
        {/* NAVBAR */}
      <nav id="navbar" className={`sticky top-0 z-50 text-white ${isScrolled ? 'border-b border-white/90 bg-dark-primary transition-all duration-300 ease-in-out' : 'bg-dark-primary transition-all duration-300 ease-in-out'}`}>
          <div className="flex justify-between items-center px-5 h-[88px] md:px-20">
            <h2 className="text-2xl">My Profile</h2>

            <div className="size-10 md:hidden">
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

            <ul className="hidden md:flex space-x-6 text-lg">
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Projects</li>
              <li className="hover:underline cursor-pointer">Social Link</li>
            </ul>
          </div>

            {/* Mobile Dropdown Menu */}
          <div 
            className={`px-0 absolute w-full border-t border-white/50 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="w-full flex flex-col bg-navbar text-lg font-medium shadow-inner divide-y divide-white/50 border-b border-b-white">
              <li className="py-4">
                <p className="hover:text-blue-500 transition duration-200 cursor-pointer text-center">About</p>
              </li>
              <li className="py-4">
                <p className="hover:text-blue-500 transition duration-200 cursor-pointer text-center">Projects</p>
              </li>
              <li className="py-4">
                <p className="hover:text-blue-500 transition duration-200 cursor-pointer text-center">Social Link</p>
              </li>
            </ul>
          </div>
        </nav>

        {/* <div 
          className="relative h-[calc(100vh-88px)] flex flex-col py-10 gap-y-8 text-center overflow-hidden bg-center bg-size-[300px] bg-no-repeat"
          style={{ backgroundImage: `url(${bgHeader})` }}
        >
          <img src={imgProfile} alt="" className="size-44 rounded-full object-cover mx-auto z-10" />
          <h1 className="text-4xl font-semibold text-white w-full px-10 font-playfair tracking-wide z-10">
            Hello, I am <br /> Rifki Taufikurrohman
          </h1>
          <p className="text-xl font-light text-white z-10">
            Software Engineering student at Telkom University Purwokerto
          </p>
        </div> */}


        {/* PARALLAX BACKGROUND */}
        <section id="jumbotron">
          <div className="relative h-[calc(100vh-88px)] flex flex-col py-20 gap-y-8 text-center overflow-hidden">
            <div 
              className="absolute size-44 top-2/3 -left-[24vw]  bg-center bg-cover pointer-events-none z-10 opacity-55" 
              style={{ backgroundImage: `url(${bgHeader})` }} 
            />
            <div 
              className="absolute size-44 bottom-[1vw] left-1/2 -translate-x-1/2 bg-center bg-cover pointer-events-none z-10 opacity-40" 
              style={{ backgroundImage: `url(${bgHeader})` }} 
            />
            {/* <div 
              className="absolute size-44 -bottom-23 left-1/2 -translate-x-1/2 bg-center bg-cover pointer-events-none z-10 opacity-20" 
              style={{ backgroundImage: `url(${bgHeader})` }} 
            /> */}
            <div 
              className="absolute size-44 top-2/3 -right-[24vw] bg-center bg-cover pointer-events-none z-10 opacity-55" 
              style={{ backgroundImage: `url(${bgHeader})` }} 
            />
            
            <img src={imgProfile} alt="" className="size-44 rounded-full object-cover mx-auto z-20" />
            <h1 className="text-4xl font-semibold text-white w-full px-10 font-playfair tracking-wide z-20">
              Hello, I am <br /> Rifki Taufikurrohman
            </h1>
            {/* <p className="text-xl font-light text-white z-20">
              Software Engineering student at Telkom University Purwokerto
            </p> */}
          </div>
        </section>

        <section id="about" className="h-[calc(100vh-88px)]  px-6 py-10">
          <div className="flex flex-col gap-10">
            <h1 className="text-gold text-3xl">-- About</h1>
            <div className="size-full bg-navbar p-5 rounded-2xl text-white inset-shadow-sm inset-shadow-gold transition duration-800 ease-in-out hover:ring-2 hover:ring-gold hover:inset-shadow-2xs">
              <p className="text-xl text-start leading-10 tracking-wide">
                I am Rifki Taufikurrohman, a Software Engineering student at Telkom University Purwokerto, I am currently interested in front-end web developer. The technologies I use are React JS, TailwindCss, Node JS and others.
              </p>
            </div>
            <div className="border-4 border-dotted border-gold"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
