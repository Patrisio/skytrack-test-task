import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #fcd857;
  padding: 20px;
  display: flex;
  justify-content: center;
  box-shadow: -2px 3px 22px rgba(0,0,0,0.2);
`;

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      { children }
    </StyledHeader>
  )
};