// import React, { useState, useEffect, useContext } from 'react';
// import React, { useState, createContext } from 'react';
import React, { createContext, useContext } from 'react';

const StateContext = createContext({
  // x: 'Sergio',
});

function useAppState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function StateProvider({ children }) {
  const y = 'sergio';

  return <StateContext.Provider value={{ y }}> {children} </StateContext.Provider>;
}

export { useAppState };
export default StateProvider;
