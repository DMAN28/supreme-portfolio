import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
   <LeftSection>
    <SectionTitle main center>
      Hello <br/>
      Welcome to my portfolio
    </SectionTitle>
    <SectionText>My name is David I'm a Fullstack web developer with an extensive experience within the medical field using and interacting with Electronic health records (EHR) and Lab information systems (LIS). I’m eager to utilize my abilities to adapt and execute in high paced attention to detail oriented environments to build great web applications.</SectionText>
    <Button onClick={()=> window.location = 'https://www.google.com'}>Learn more</Button>
   </LeftSection>
  </Section>
);

export default Hero;