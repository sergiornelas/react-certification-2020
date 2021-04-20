// import React, { useState, useEffect, useContext } from 'react';
// import React, { useState, createContext } from 'react';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext({});

function useAppState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function StateProvider({ children }) {
  const [search, setSearch] = useState('wizeline');
  const [videoSelected, setVideoSelected] = useState('');
  // const searchResult = (word) => {
  //   setSearch(word);
  // };
  // const getVideoSelected = (id) => {
  //   setVideoSelected(id);
  // };

  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        videoSelected,
        setVideoSelected,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export { useAppState };
export default StateProvider;
