// import React, { useState } from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppState } from '../../../providers/AppState/State.provider';

const Input = styled.input`
  font-size: 1.2rem;
  color: black;
  margin-left: 1rem;
  width: 9rem;
  &:hover {
    background-color: lightgray;
  }
  @media (min-width: 350px) {
    width: 12rem;
  }
  @media (min-width: 495px) {
    width: 20rem;
  }
  @media (min-width: 595px) {
    width: 25rem;
  }
`;

function Search() {
  const [queryWord, setQueryWord] = useState('');
  const { setSearch } = useAppState();
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    setSearch(queryWord);
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
