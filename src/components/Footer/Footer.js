import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList> 
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:971-267-0295">971-267-029</LinkItem> 
      </LinkColumn>
      
      
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:dmanriqu@protonmail.com">dmanriqu@protonmail.com</LinkItem> 
      </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"I have no special talent. I am only passionately curious."</Slogan>
        </CompanyContainer>
      <SocialIcons href='https://github.com/DMAN28'>
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href='https://twitter.com/NWSportscast'>
      <AiFillTwitterCircle size="3rem"/>
    </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
