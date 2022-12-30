import React, { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/Reducer";

const Context = createContext();

const initialState = {
  products: [],
  isLoadingProducts: false,
  isSidebarOpen: false,
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "OPEN__SIDEBAR" });
  };
  const closeSidebar = () => {
    dispatch({ type: "CLOSE__SIDEBAR" });
  };

  return (
    <Context.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;

const useAppContext = () => {
  return useContext(Context);
};

export { useAppContext };
