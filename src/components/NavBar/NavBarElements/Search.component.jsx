import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

function Search({ searchResult }) {
  const [queryWord, setQueryWord] = useState('');

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    searchResult(queryWord);
    history.push('/');
  };

  const onSearchChanged = (event) => {
    const inputTitle = event.target.value;
    setQueryWord(inputTitle);
  };

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
