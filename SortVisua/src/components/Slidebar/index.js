import React from 'react';
import { SlidebarContainer, Icon, CloseIcon, SlidebarWapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SlidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SlidebarContainer isOpen={ isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
         <CloseIcon />
       </Icon>
       <SlidebarWapper>
         <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to='discover' onClick={toggle}>
                Discover
            </SidebarLink>
            <SidebarLink to='services' onClick={toggle}>
                Services
            </SidebarLink>
            <SidebarLink to='signup' onClick={toggle}>
                Sign Up
            </SidebarLink>
         </SidebarMenu>
         <SideBtnWrap>
            <SidebarRoute to='/signin'>
                Sign In
            </SidebarRoute>
         </SideBtnWrap>
       </SlidebarWapper>
    </SlidebarContainer>
  )
}

export default Sidebar