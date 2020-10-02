import React from 'react';
import styled from 'styled-components';
import { PageContainer, ActiveButton } from '../../theme/globalStyles';

import Background from '../../assets/undraw_setup_wizard_r6mr.png';

const SectionContainer = styled.section`
  width: 60%;
  height: calc(100% - 100px);
  background-color: white;
  text-align: center;
  padding: 25px;
  flex: 1;
  background-color: #fefefe;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledImg = styled.img`
  height: 500px;
  width: auto;
`;

const CopyContainer = styled.div`
  flex: 1;
`;

export default function HomePage(): JSX.Element {
  return (
    <PageContainer>
      <SectionContainer>
        <StyledImg src={Background} />
        <CopyContainer>
          <h1>Divorce made easy.</h1>
          <p>Follow our quiz for different path suggestions.</p>
          <ActiveButton>Get Started</ActiveButton>
        </CopyContainer>
      </SectionContainer>
    </PageContainer>
  );
}
