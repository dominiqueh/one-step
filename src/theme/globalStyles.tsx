import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from '@reach/router';

export const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800&display=swap');



/* ------------- GENERAL STYLES ------------- */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-text-stroke: 0.45px;
text-shadow: #fff 0px 1px 1px;
  scroll-behavior: smooth;
  background: #fefefe;
  line-height: 1;
  font-family: 'Lato', sans-serif;
  color: #181a1c;
  font-size: 16px;
  height: 100%;
}

header, footer {
  width: 100%;
  height: 70px;
  padding: 0 25px 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}

h1, h2 {
  font-family: 'Montserrat Alternates', sans-serif;;
}

`;

/* ------------- GENERAL COMPONENTS ------------- 
Containers */
export const PageContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow: column;
  height: calc(100vh - 225px);
  justify-content: center;
  text-align: center;
  align-content: center;
`;

export const NavLink = styled(Link)`
  color: #18242b;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    color: #398c9d;
    text-decoration: underline;
  }
`;

export const ActiveButton = styled.button`
  padding: 18px 44px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .5px;
  text-transform: uppercase;
  font-family: 'Barlow', sans-serif;
  background-color: rgb(0 79 255);
  transition: all 0.3s ease 0s, transform 0.5s ease 0s;
  box-shadow: rgba(255, 0, 131, 0.5) 0px 10px 40px -10px;
  color: #fefefe;
  overflow: visible;
  -webkit-appearance: button;
  outline: 1px solid transparent;
  border: none;
    outline-offset: -4px;
    border-radius: 5px;
}
`;
