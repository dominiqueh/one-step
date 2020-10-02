import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { GlobalStyle } from './theme/globalStyles';
import HomePage from './pages/home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Router>
        <RouterPage path="/" pageComponent={<HomePage />} />
      </Router>
      <Footer />
    </React.Fragment>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
