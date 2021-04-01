import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.2rem;
  color: black;
  margin-left: 1rem;
  width: 13rem;
  &:hover {
    background-color: lightgray;
  }

  @media (min-width: 495px) {
    width: 20rem;
  }

  @media (min-width: 595px) {
    width: 25rem;
  }
`;

function SearchInput() {
  return <Input placeholder="Search video" role="search" />;
}

export default SearchInput;
