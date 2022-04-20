import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from 'utils/global';
import './fonts/fonts.css';

const Wrapper = styled.div`
 position: relative;
`

const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
    </Wrapper>
  )
}

export default Layout;