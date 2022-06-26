import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
   <LeftSection>
    <SectionTitle main center>
      Portfolio<br/>
      Personal Portfolio
    </SectionTitle>
    <SectionText>Hello my name is David and I'm a Fullstack web developer with an extensive experience within the medical field using and interacting with Electronic health records and Lab information systems. Successfully helped restructure clinic wide workflow to improve communication  by implementing Agile principles. I’m looking to leverage my ability to work in a high paced attention to detail oriented environments to help build great web applications.</SectionText>
    <Button onClick={()=> window.location = 'https://www.google.com'}>Learn more</Button>
   </LeftSection>
  </Section>
);

export default Hero;