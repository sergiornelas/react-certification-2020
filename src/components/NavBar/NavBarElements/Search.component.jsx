import React, { useState } from 'react';
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

function Search({ onSearch }) {
  // INDIO
  const [title, setTitle] = useState('');

  const onSearchChanged = (event) => {
    const inputTitle = event.target.value;
    console.log(inputTitle); // s se ser serg
    setTitle(inputTitle);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(title);
  };
  //  FIN INDIO

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Search video"
        role="search"
        type="text"
        onChange={onSearchChanged}
      />
    </form>
  );
}

export default Search;
