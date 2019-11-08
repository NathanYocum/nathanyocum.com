import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
  background-color: #0476ff;
  color: #ffefef;
`;

const Header = ({ title }) => (
  <HeaderContainer>
    <h1>{title}</h1>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
