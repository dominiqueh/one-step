import React from 'react';
import styled from 'styled-components';

import { NavLink } from '../theme/globalStyles';

const StyledHeader = styled.header`
  border-bottom: 1px solid #efefef;
  position: fixed;
  top: 0;
  height: 100px;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 36px;
`;

function NavBar(): JSX.Element {
  return (
    <StyledHeader>
      {/* <Container> */}
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Title>
        <strong>One Step Form</strong>
      </Title>
      <NavLink to="/">My Account</NavLink>
      {/* </Container> */}
    </StyledHeader>
  );
}

export default NavBar;
