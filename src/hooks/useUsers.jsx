import { useEffect, useState } from "react";
import { fetchUsers } from "../api";

const useUsers = (user, generateError, logoutUser, removeUser) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await fetchUsers(user.token);

      if (res.error) {
        generateError(res.error.message, res.error.status);
        logoutUser();
        setLoading(false);
        return;
      }

      setUsers(res.users);
      setLoading(false);
    };

    getUsers();
  }, [user.token, generateError, logoutUser]);

  const filterUser = (id) => {
    setUsers((curr) => curr.filter((user) => user.user_id !== id));
    removeUser();
  };

  return { loading, users, filterUser };
};

export default useUsers;
