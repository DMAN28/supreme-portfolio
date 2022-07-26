import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';



const Timeline = () => {
 

  return (
    <Section id="about">
      <SectionDivider/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I'm a Fullstack web developer having grown up with a lifelong passion for technology. From inputting code into an IBM personal computer to play games from 5¼-inch floppy disks. To making personal websites in middle school. I've always had an enthusiasm and curiosity for computers and coding. I’m looking to leverage my passion for technology and previous experience helping people to help build great web applications.
      </SectionText>
     
    </Section>
  );
};

export default Timeline;
