import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); // creating a context object

export const useAuthContext = () => {
  return useContext(AuthContext);
}; // creating a custom hook so that all the child components can access the context object without having to import it in each component

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  ); // setting the initial value of the state to the value stored in the local storage

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  ); // providing the context object to all the child components.
  //Note to self: AuthContext.provider is a component that makes the context value (authUser, setAuthUser) available to all the components that are inside it (i.e., its children).
};
