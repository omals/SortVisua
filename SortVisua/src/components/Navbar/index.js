import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
const Navbar= ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80 ) {
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
    }
    useEffect (() =>  {
      window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome =() => {
        scroll.scrollToTop()
  }


  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
            <NavLogo to='/'onClick={toggleHome}>SortVisua</NavLogo>
            <MobileIcon onClick={toggle}>
               <FaBars/>
            </MobileIcon>
            <NavMenu>
               <NavItem>
                <NavLinks to='introduction'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               
                >Introduction</NavLinks>
               </NavItem>
               <NavItem>
                <NavLinks to='benefits'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >Benefit</NavLinks>
               </NavItem>
               <NavItem>
                <NavLinks to='types'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >Types</NavLinks>
               </NavItem>
               <NavItem>
                <NavLinks to='timecomplexity'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true'  
                offset={-80}
               >Time Complexity</NavLinks>
               </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Start Sorting</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;