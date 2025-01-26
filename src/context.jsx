import {
  useReducer,
  useEffect,
  useContext,
  createContext,
  Children,
} from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let greeting = 'hello';
  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
