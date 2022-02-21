import { useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(false);

  const generateError = (message, status) => {
    setLoginError(`Error: ${message}\n Status: ${status}`);
  };

  const loginUser = (user) => {
    setUser(user);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return { user, loginUser, logoutUser, loginError, generateError };
};

export default useLogin;
