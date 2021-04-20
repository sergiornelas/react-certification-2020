// import React, { createContext, useContext, useReducer } from 'react';  // useReducer
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext({});

function useAppState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

// const initialState = { // useReducer
//   search: 'wizeline',
// }

// function reducer(state, action) {  // useReducer
//   switch (action.type) {
//     case 'SET_SEARCH':
//       return {
//         ...state,
//         search: action.payload,
//       };
//     default:
//       throw new Error('Unknown action');
//   }
// }

function StateProvider({ children }) {
  const [search, setSearch] = useState('wizeline');
  // const [state, dispatch] = useReducer(reducer, initialState); // useReducer

  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        // state, // useReducer
        // dispatch,  // useReducer
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export { useAppState };
export default StateProvider;
