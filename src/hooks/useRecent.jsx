import { useEffect, useState } from "react";
import { getRecent } from "../api";

const useRecent = (user, logoutUser, generateError) => {
  const [notes, setNotes] = useState([]);
  const [tendencies, setTendencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecent = async () => {
      const res = await getRecent(user.token);
      if (res.error) {
        logoutUser();
        generateError(res.error.message, res.error.status);
      }
      const { recent } = res;

      setNotes(recent.notes);
      setTendencies(recent.tendencies);
      setLoading(false);
    };

    fetchRecent();
  }, [user.token, logoutUser, generateError]);

  return { loading, notes, tendencies };
};

export default useRecent;
