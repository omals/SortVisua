import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import{FaCss3, FaGithubAlt, FaHtml5, FaJs, FaReact} from 'react-icons/fa';
import { FooterContainer,FooterWrap , FooterLinksContainer, FooterLinksWrapper , FooterLinkItems , FooterLinkTitle ,  FooterLink , SocialMedia , SocialMediaWrap , SocialLogo , WedsiteRights , SocialIcons , SocialIconLink} from './FooterElements';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to="/">Project Partener</FooterLink>
                            <FooterLink to="https://github.com/omals">  - OMAL S</FooterLink>
                            <SocialIcons>
                        <SocialIconLink
                            href="//www.github.com/omals" target="_blank" aria-label="Github">
                                <FaGithubAlt/>
                        </SocialIconLink>
                    </SocialIcons>
                            <FooterLink to = "https://github.com/Farha00">  - FARHA T A</FooterLink>
                            <SocialIcons>
                        <SocialIconLink
                            href="https://github.com/Farha00" target="_blank" aria-label="Github">
                                <FaGithubAlt/>
                        </SocialIconLink>
                    </SocialIcons>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Library Used for Project</FooterLinkTitle>
                       
                        <SocialIcons>
                        <SocialIconLink
                            href="https://reactjs.org/" target="_blank" aria-label="Github">
                                    <FaReact/>
                        </SocialIconLink>
                    </SocialIcons>
                        
                        <FooterLinkTitle> Languages Used</FooterLinkTitle>

                        <SocialIcons>
                        <SocialIconLink
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="JS" aria-label="Github">
                                 <FaJs/>
                        </SocialIconLink>
                    </SocialIcons>

                    <SocialIcons>
                        <SocialIconLink
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" aria-label="Github">
                             <FaCss3/>
                        </SocialIconLink>
                    </SocialIcons>

                    <SocialIcons>
                        <SocialIconLink
                            href="https://html.com/" target="_blank" aria-label="Github">
                                 <FaHtml5/>
                        </SocialIconLink>
                    </SocialIcons>
                            
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        SortVisua
                    </SocialLogo>
                    <WedsiteRights></WedsiteRights>
                    <FooterLinkTitle> </FooterLinkTitle>
                    <SocialIcons>
                        <SocialIconLink
                            href="https://github.com/omals/SortVisua" target="_blank" aria-label="Github">
                              REPO_LINK  <FaGithubAlt/>
                        </SocialIconLink>
                    </SocialIcons>

                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer