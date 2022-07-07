import React from 'react';
import { DiStreamline, DiReact } from 'react-icons/di';
import { FaLaptopMedical } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider/>

    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Technologies which I have worked with
    </SectionText>
    <List> 
      <ListItem>
         <DiReact size="3rem"/>
         <ListContainer>
          <ListTitle>Front-End</ListTitle> 
          <ListParagraph>
            Experience with <br/>
            CSS<br/>
            HTML<br/>
            Bootstrap<br/>
            React<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    
      <ListItem>
         <DiStreamline size="3rem"/>
         <ListContainer>
          <ListTitle>Back-End</ListTitle> 
          <ListParagraph>
            Experience with <br/>
            Node.js<br/>
            MongoDB<br/>
            MySQL<br/>
            JavaScript<br/>
             
          </ListParagraph>
        </ListContainer>
      </ListItem>
    
      <ListItem>
         <FaLaptopMedical size="2.5rem"/>
         <ListContainer>
          <ListTitle>EHR and LIS</ListTitle> 
          <ListParagraph>
          Experience with <br/>
            Centricity <br/>
            Harvest Orchard<br/>
             
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
