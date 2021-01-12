import React from 'react';
import * as styled from 'styled-components';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Link, Router } from '@reach/router';
import Dynamic from 'containers/Dynamic';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const GlobalStyle = styled.createGlobalStyle`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #084197;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }

  nav {
    width: 100%;
    background: #084197;
  }

  nav a {
    color: white;
    padding: 1rem;
    display: inline-block;
  }

  .content {
    padding: 1rem;
  }
`;

function App() {
  return (
    <Root>
      <GlobalStyle />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
