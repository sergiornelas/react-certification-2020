import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: black;
  margin: 10px;
  text-align: center;
  @media (min-width: 750px) {
    margin: 5px;
    font-size: 20px;
  }
`;

const Text = styled.p`
  color: black;
  font-size: 12px;
  margin: 0;
  padding: 0 15px 7px 15px;
  @media (min-width: 750px) {
    margin: 5px;
    font-size: 16px;
  }
`;

export function Info({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Container>
  );
}
