import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Header from '../components/header/header';

const App = ({ data }) => {
  return (
    <div>
      <Header title={data.site.siteMetadata.title} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: { title: PropTypes.string }
    })
  })
};

App.defaultProps = {
  data: null
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default App;
