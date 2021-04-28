import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext({});

function useAppState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

let dark = JSON.parse(localStorage.getItem('darkTheme'));
if (dark === null) {
  dark = false;
}

const initialState = {
  search: 'wizeline',
  darkTheme: dark,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        darkTheme: action.payload,
      };
    default:
      throw new Error('Unknown action');
  }
}

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export { useAppState };
export default StateProvider;
