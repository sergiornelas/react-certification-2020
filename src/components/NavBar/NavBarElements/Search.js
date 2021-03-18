import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.2rem;
  color: black;
  margin-left: 1rem;
  width: 10rem;
  &:hover {
    background-color: lightgray;
  }

  @media (min-width: 495px) {
    width: 25rem;
  }
`;

function SearchInput() {
  return <Input placeholder="Search video" />;
}

export default SearchInput;
