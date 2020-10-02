import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../theme/globalStyles';

const StyledFooter = styled.footer`
  border-top: #cdd2df 1px solid;
  color: #2a2d34;
  bottom: 0;
`;

const FooterLink = styled(NavLink)`
  color: #2a2d34;
`;

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <h3>Site by Dominique</h3>
      <FooterLink to="/">Contact</FooterLink>
    </StyledFooter>
  );
}

export default Footer;
