import React, { useState } from 'react'
import logolight from '../assets/logo.webp';
import logodark from '../assets/logo-light.webp';
import { BiSearch } from 'react-icons/bi';
import { RxMoon } from 'react-icons/rx';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { HiXMark } from 'react-icons/hi2'
import { FiMenu, FiSun } from 'react-icons/fi'
import { useEffect } from 'react';

export default function Header() {

  const [mobileMenu, setMobileMenu] = useState(false);


  const menu = document.querySelector(".menu");
  const toggleMenu = () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active")
        setMobileMenu(false);
      }else {
        menu.classList.add("active");
        setMobileMenu(true)
      }
  }

  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  const toggleSuubMenu = () => {
    setToggleSubMenu((prev) => !prev);
  }
  const [toggleSubMenu2, setToggleSubMenu2] = useState(false);
  const toggleSuubMenu2 = () => {
    setToggleSubMenu2((prev) => !prev);
  }


  // Dark Mode
  const [theme, setTheme] = useState("")

  const userTheme = localStorage.getItem("theme");
  const systemThem = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    if (userTheme === 'dark' || (!userTheme && systemThem)) {
      setTheme('dark')
      document.documentElement.classList.add("dark");
      return;
    } else {
      setTheme('light')
      document.documentElement.classList.remove("dark");
    }
  }, [userTheme, systemThem])

  const handleThemeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme('light');
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setTheme('dark')
      }
  }


  let activeStyle = {
    color: "#f08e80"
  };

  function search() {
    const nav = document.querySelector(".nav");
  
    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav__open");
    });
  
    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav__open");
    });
    document.querySelector(".xmark").addEventListener("click", () => {
        nav.classList.remove("nav__open");
    });
  }
  // Sticky Nav
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 100) {
      body.classList.remove("scroll-down");
      body.classList.remove("scroll-up");
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up")
      
    }

    lastScroll = currentScroll;

  })

  return (
    <>
    <div className='h-[115px]'></div>
      <header id="navbar" className={`bg-[#FFF6EF] dark:bg-[#02111A] py-10 fixed top-0 left-0 w-full z-[999] transition-all duration-300 ease-in-out`}>
        <nav className={`sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto flex flex-row flex-wrap justify-between items-center px-3 font-WorkSans font-light`}>
          <Link to="/"><img src={theme === "dark" ? logodark : logolight} alt="logo" className='h-[35px]' /></Link>


          {/* Start The Main Menu */}
          <ul className='lg:flex hidden flex-row items-center text-base font-medium dark:text-[#d6d6d6]'>
            <li><button className={`cursor-pointer hover:bg-[#FDEAE4] dark:hover:bg-opacity-10 rounded px-[18px] py-3 flex flex-row relative dropdown transition duration-150 ease-in-out z-10`}><span>Home</span><MdOutlineKeyboardArrowDown className='ml-[2px] translate-y-[4px]'/>

            <ul className='dropdown-menu hidden absolute bg-white dark:bg-[#041722] w-[200px] top-[50px] left-[-45px] p-2 rounded-md shadow-lg text-start'>
                <NavLink to={`/`} style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block transition duration-150 ease-in-out hover:text-[#f08e80] dark:hover:text-[#d6d6d6] dark:hover:bg-opacity-10'>Home 01</a></li></NavLink>
                <NavLink to="/home-02" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6] transition duration-150 ease-in-out dark:hover:bg-opacity-10'>Home 02</a></li></NavLink>
              </ul>
            
            </button></li> 
            <NavLink to="about" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded px-[18px] py-3 transition duration-150 ease-in-out dark:hover:bg-opacity-10'>About</a></li></NavLink>
            <NavLink to="blog" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded px-[18px] py-3 transition duration-150 ease-in-out dark:hover:bg-opacity-10'>Blog</a></li></NavLink>
            <NavLink to="archive" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded px-[18px] py-3 transition duration-150 ease-in-out dark:hover:bg-opacity-10'>Archive</a></li></NavLink>
            <li><button className='cursor-pointer hover:bg-[#FDEAE4] rounded px-[18px] py-3 flex flex-row items-center relative dropdown z-10 transition duration-300 ease-in-out dark:hover:bg-opacity-10' ><span>Pages</span> <MdOutlineKeyboardArrowDown className='ml-[2px] translate-y-[1px]'/>

              <ul className='dropdown-menu hidden absolute bg-white dark:bg-[#041722] w-[230px] top-[50px] left-[-70px] p-2 rounded-md shadow-lg text-start'>
                <NavLink to="/author" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] hover:text-[#f08e80] dark:hover:text-[#d6d6d6] rounded pl-3 py-3 block transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Author</a></li></NavLink>
                <NavLink to="/author/Chris-Impey" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6]  transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Author Single</a></li></NavLink>
                <NavLink to="/elements" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6]  transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Elements</a></li></NavLink>
                <NavLink to="/tags" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6]  transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Tags</a></li></NavLink>
                <NavLink to="/categories" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6]  transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Categories</a></li></NavLink>
                <NavLink to="/tags/Machine" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6]  transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Tag Singel</a></li></NavLink>
                <NavLink to="/categories/ai" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6]  transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Category Single</a></li></NavLink>
                <NavLink to="/privacy" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded pl-3 py-3 block hover:text-[#f08e80] dark:hover:text-[#d6d6d6]  transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Privacy</a></li></NavLink>
              </ul>
            
            </button></li>
            <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}><li><a className='cursor-pointer hover:bg-[#FDEAE4] rounded px-[18px] py-3 transition duration-150 ease-in-out dark:hover:bg-opacity-10' >Contact</a></li></NavLink>
          </ul>
          {/* End The Main Menu */}

          {/* Start The Search And Dark mode Section */}
          <div className='relative flex flex-row flex-wrap items-center space-x-2 text-base font-medium'>
            <div>
              <button onClick={search} id="btnNav" className='flex flex-row items-center justify-center cursor-pointer text-[#152035] hover:bg-[#FDEAE4] rounded py-3 px-3 hover:text-[#f08e80] dark:text-[#d6d6d6] transition duration-150 ease-in-out dark:hover:bg-opacity-10'><span className='hidden sm:block'>Search</span>  <BiSearch className='flex ml-0 text-xl md:text-lg sm:ml-1' />
              </button>
              {/* Start The Search Section */}
              <div className='flex flex-row items-center mr-5 nav'>
                <div className='nav_links md:p-12 p-8 dark:bg-[#031119] z-50'>
                  <div className='flex flex-row'>
                  <input type="search" name="" id="" className='w-full border-b-[1px] focus:border-[#f08e80] focus:outline-none py-3 text-lg dark:bg-transparent dark:text-white' placeholder='Type to search blog..' />
                  <HiXMark  className='xmark cursor-pointer text-[40px] text-[#f08e80]' />
                  </div>
                  <div className='px-3 pl-0 mt-10'>
                    <p className='text-xl md:text-2xl font-CreteRound dark:text-white'>See posts by tags</p>
                    <ul className='flex flex-row flex-wrap gap-2 mt-5'>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Machine</a></li>
                      <li><a className='py-1 px-3 text-sm text-[#505050]  bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Life</a></li>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Lighting</a></li>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Lifestyle</a></li>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >StartUps</a></li>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Work</a></li>
                    </ul>
                  </div>
                  <div className='px-3 pl-0 mt-10'>
                    <p className='text-xl md:text-2xl font-CreteRound dark:text-white'>See posts by category</p>
                    <ul className='flex flex-row mt-5 space-x-2'>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Ai</a></li>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Earth</a></li>
                      <li><a className='py-1 px-3 text-sm text-[#505050] bg-[rgba(240,142,128,.1)] hover:bg-[#f08e80] hover:text-white transition duration-150 ease-in-out dark:text-[#d6d6d6] cursor-pointer' >Tech</a></li>
                    </ul>
                  </div>
                </div>
                <div className="nav__overlay"></div>
              </div>
              {/* End The Search Section */}
            </div>

              <div className={`${ toggleMenu ? "fixed top-[82px] left-0 w-full lg:hidden translate-y-0 transition-transform duration-1000 ease-in-out" : "-translate-y-[340px]"} transition-all duration-500 ease-in-out`}>
                {/* Start The Mobile Menu */}
                <ul className='menu dark:bg-[#02111A] dark:text-[#d6d6d6] dark:hover:text-white'>
                  <li className='item has-submenu' onClick={toggleSuubMenu}>
                    <a tabIndex="0" href="#" className='has-icon'>Home <MdOutlineKeyboardArrowDown className='ml-1 translate-y-[4px]'/></a>
                    
                    <ul className={`${toggleSubMenu ? "block" : "hidden"} submenu`}>
                      <li className='subitem'><NavLink to={`/`} style={({ isActive }) => isActive ? activeStyle : undefined}>Home-01</NavLink></li>
                      <li className='subitem'><NavLink to={`/home-02`} style={({ isActive }) => isActive ? activeStyle : undefined}>Home-02</NavLink></li>
                    </ul>
                  
                  </li>
                  <li className='item'><NavLink to="about" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink></li>
                  <li className='item'><NavLink to={`/blog`} style={({ isActive }) => isActive ? activeStyle : undefined}>Blog</NavLink></li>
                  <li className='item'><NavLink to="archive" style={({ isActive }) => isActive ? activeStyle : undefined}>Archive</NavLink></li>
                  <li className='item has-submenu' onClick={toggleSuubMenu2}>
                    <a href='#' tabIndex="0"  className='has-icon'>Pages <MdOutlineKeyboardArrowDown className='ml-1 translate-y-[4px]'/></a>

                    <ul className={`${toggleSubMenu2 ? "block" : "hidden"} submenu`}>
                      <li className='subitem'><NavLink  to={"/author"} style={({ isActive }) => isActive ? activeStyle : undefined}>Author</NavLink></li>
                      <li className='subitem'><NavLink to="/author/Chris-Impey" style={({ isActive }) => isActive ? activeStyle : undefined}>Author Single</NavLink></li>
                      <li className='subitem'><NavLink  to="/elements" style={({ isActive }) => isActive ? activeStyle : undefined}>Elements</NavLink></li>
                      <li className='subitem'><NavLink  to="/tags" style={({ isActive }) => isActive ? activeStyle : undefined}>Tags</NavLink></li>
                      <li className='subitem'><NavLink  to="/categories" style={({ isActive }) => isActive ? activeStyle : undefined}>Categories</NavLink></li>
                      <li className='subitem'><NavLink   to="/tags/Machine" style={({ isActive }) => isActive ? activeStyle : undefined}>Tag Single</NavLink></li>
                      <li className='subitem'><NavLink  to="categories/ai" style={({ isActive }) => isActive ? activeStyle : undefined}>Category Single </NavLink></li>
                      <li className='subitem'><NavLink   to="/privacy" style={({ isActive }) => isActive ? activeStyle : undefined}>Privacy </NavLink></li>
                    </ul>
                  
                  </li>
                  <li className='item'><NavLink  to="contact" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink></li>
                </ul>
              </div>
                  <button onClick={toggleMenu} className="dark:stroke-white">
                    {mobileMenu ?
                      (
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="lg:hidden text-[30px] dark:text-white font-bold cursor-pointer object-contain mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path>
                      </svg>
                      ) 
                      :
                      (<FiMenu className="lg:hidden text-[30px] dark:text-[#d6d6d6] font-bold cursor-pointer object-contain mr-2"/>) 
                    }
                </button>
            <div className='text-xl cursor-pointer' onClick={handleThemeSwitch}>{theme === "dark" ? <FiSun className='text-2xl dark:text-[#d6d6d6]' /> : <RxMoon className='text-2xl dark:text-[#d6d6d6]'/>}</div>
          </div>
          {/* End The Search And Dark mode Section */}
        </nav>
      </header>
    </>
  )
}