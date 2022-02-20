const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const login = async (username, password) => {
  try {
    const { data } = await api.post("/auth/login", {
      username,
      password,
    });

    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const fetchUsers = async (token) => {
  try {
    const { data } = await api.get("/admin/users", {
      headers: { authorisation: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const patchUser = async (token, id, validated, admin) => {
  try {
    const { data } = await api.patch(
      `/admin/users/${id}`,
      { validated, admin },
      {
        headers: { authorisation: `Bearer ${token}` },
      }
    );
    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const delUser = async (token, id) => {
  try {
    await api.delete(`/admin/users/${id}`, {
      headers: { authorisation: `Bearer ${token}` },
    });
  } catch (err) {
    return err;
  }
};

export const getRecent = async (token) => {
  try {
    console.log("getting recent");
    const { data } = await api.get("/admin/recent", {
      headers: { authorisation: `Bearer ${token}` },
    });

    console.log(data);
    return data;
  } catch (err) {
    console.log(err, "<<");
    return err.response.data;
  }
};
