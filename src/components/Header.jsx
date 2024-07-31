import React, { useState, useEffect } from 'react'
import Button from './Button'
import White from '../assets/White.svg'
import { navigation } from '../constants'
import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import MenuSvg from '../assets/MenuSvg'
import { Link } from 'react-router-dom'

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false)
  const pathname = useLocation()

  const toggleNavigation = () => {
    if(openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return

    enablePageScroll()
    setOpenNavigation(false)
  }

  return (
    <div className={`fixed w-full top-0 left-0 z-50 lg:border-b-2 bg-white lg:border-p-8 lg:backdrop-blur-sm ${openNavigation ? "" :  "backdrop-blur-sm sm:bg-white"}`}>
      <div className={`flex items-center justify-center w-full lg:px-5.5 xl:px-10 max-lg:py-4`}>
        <a href="/hero" className={`block xl:mr-[5rem] px-6 my-4 ${openNavigation ? "": "block"} `}>
          <img src={White} width={30} height={30} />
        </a>
        <nav className={`${openNavigation ? "flex bg-white " : "hidden"} fixed items-center justify-center top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className='relative z-10 flex flex-col items-center justify-between m-auto lg:flex-row'>
            
            {navigation.map((item) => (
              <a key={item.id} href={item.url} onClick={handleClick}  className={`block relative font-code uppercase text-p-8 transition-colors hover:text-p-10 px-4 py-5 md:py-8 lg:-mr-0.25 lg:text-xs sm:text-xs lg:font-semibold  ${
                item.onlyMobile ? "lg:hidden" : ""}  ${item.url === pathname.hash? "z-20 lg:text-p-10" : "lg:text-p-10/80"} lg:hover:text-p-10 xl:px-12`}>
                {item.title}
              </a>
            ))}
          </div>
        </nav>


        <Link to="/learnify/register" className=" hidden mr-5 lg:text-xs  text-p-8 transition-colors uppercase hover:text-p-10 sm:text-xs lg:font-semibold lg:block">
            Sign Up       
        </Link>
        
        <Link to="/learnify/login">
          <Button className="btn-secondary hidden lg:flex lg:text-xs px-6 py-3 uppercase text-p-8 sm:text-xs lg:font-semibold">
            Sign In
          </Button>
        </Link> 

        <Button className={`ml-auto lg:hidden classes hover:none` } px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header