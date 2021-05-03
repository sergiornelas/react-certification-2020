import styled from 'styled-components';
import React from 'react';
import { useAppState } from '../../../providers/AppState/State.provider';

export const LoginLight = styled.section`
  width: 70%;
  margin: 5rem auto;
  background-color: darkred;
  padding: 2rem 0;
  border-radius: 15px;

  @media (min-width: 1000px) {
    width: 40%;
  }
`;

export const LoginDark = styled(LoginLight)`
  background-color: black;
`;

const Login = ({ children }) => {
  const { state } = useAppState();
  const { darkTheme } = state;
  if (darkTheme) {
    return <LoginDark>{children}</LoginDark>;
  }
  return <LoginLight>{children}</LoginLight>;
};

export const Title = styled.h1`
  text-align: center;
  letter-spacing: -1px;
  color: white;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  color: aliceblue;
`;

export const FormGroupStrong = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  margin-left: -15%;
`;

export default Login;
