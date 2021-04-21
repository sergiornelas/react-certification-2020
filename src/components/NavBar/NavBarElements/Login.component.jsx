import React from 'react';
import styled from 'styled-components';

export const LoginHandler = styled.p`
  margin-right: 1rem;
  cursor: pointer;
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

function Login() {
  return <LoginHandler>Login</LoginHandler>;
}

export default Login;
