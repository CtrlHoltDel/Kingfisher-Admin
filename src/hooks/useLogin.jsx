import { useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState(null);

  const loginUser = (user) => {
    setUser(user);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return { user, loginUser, logoutUser };
};

export default useLogin;
