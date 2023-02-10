import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };


  return (
  
        <HeroContainer id='home' >
           <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           </HeroBg>
           <HeroContent>
            <HeroH1>SORTING VISUALIZER</HeroH1>
            <HeroP>
              Various sorting algorithms designed to demonstrate its practical application on numbers.
            </HeroP>
            <HeroBtnWrapper>
              <Button to='introduction' 
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary = 'true'
              dark = 'true'
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true'  
              offset={-80}
              >
                Overview{hover ? <ArrowForward />: <ArrowRight/>}
              </Button>
            </HeroBtnWrapper>
           </HeroContent>
        </HeroContainer>
    
  );
};

export default HeroSection;