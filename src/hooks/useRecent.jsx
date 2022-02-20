import { useEffect, useState } from "react";
import { getRecent } from "../api";

const useRecent = (user, logoutUser, generateError) => {
  const [notes, setNotes] = useState([]);
  const [tendencies, setTendencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchRecent = async () => {
      const res = await getRecent(user.token);
      if (res.error) {
        logoutUser();
        generateError(res.error.message, res.error.status);
      }
      const { recent } = res;

      setStats({
        notes: recent.note_count.count,
        tendency: recent.tendency_count.count,
        players: recent.player_count.count,
        users: recent.user_count.count,
      });
      setNotes(recent.notes);
      setTendencies(recent.tendencies);
      setLoading(false);
    };

    fetchRecent();
  }, [user.token, logoutUser, generateError]);

  const removeUser = () => {
    setStats((curr) => {
      return { ...curr, users: curr.users - 1 };
    });
  };

  return { loading, notes, tendencies, stats, removeUser };
};

export default useRecent;
