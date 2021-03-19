import React from 'react';
import styled from 'styled-components';

const LoginHandler = styled.p`
  color: white;
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
