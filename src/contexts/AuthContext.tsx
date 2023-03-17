import React from "react";
import PropTypes from "prop-types";
import { useProvideAuth } from "./auth/useProvideAuth";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
