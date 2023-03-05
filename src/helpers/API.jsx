import axios from "axios";

const url = "https://localhost:7087/api";
const api = axios.create({
  baseURL: url,
});

const log_error = (error) => {
  console.log(error?.code);
  console.log(error?.message);
};

export const get_divisions = async () => {
  try {
    const res = await api.get("/division");
    return res.data;
  } catch (err) {
    log_error(err);
  }
};

export const add_division = async (data) => {
  try {
    const res = await api.post("/division/", { title: data.title });
    return res.data;
  } catch (err) {
    log_error(err);
  }
};

export const get_division = async (id) => {
  try {
    const res = await api.get(`/division/${id}`);
    return res.data;
  } catch (err) {
    log_error(err);
  }
};

export const update_division = async (id, data) => {
  try {
    const res = await api.get(`/division/${id}`, { title: data.title });
    return res.data;
  } catch (err) {
    log_error(err);
  }
};

export const get_users = async () => {
  try {
    const res = await api.get("/user");
    return res.data;
  } catch (err) {
    log_error(err);
  }
};

export const register_user = async (data) => {
  try {
    const res = await api.post("/user/register/", {
      username: data.username,
      password: data.password,
      email: data.email,
      divisionId: data.division,
    });
    return res.data;
  } catch (err) {
    log_error(err);
  }
};

export const login_user = async (data) => {
  try {
    const res = await api.post("/user/login/", {
      username: data.username,
      password: data.password,
    });

    return res.data;
  } catch (err) {
    log_error(err);
  }
};

export const logout_user = async (data) => {
  try {
    const res = await api.put(`/user/logout`);
  } catch (err) {
    log_error(err);
  }
};

export const get_user = async (username) => {
  try {
    const res = await api.get(`/user/${username}`);
    return res.data;
  } catch (err) {
    log_error(err);
  }
};
