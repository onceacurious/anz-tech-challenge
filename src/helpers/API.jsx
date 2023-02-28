import axios from "axios";

const url = "https://localhost:7087/api";
const api = axios.create({
  baseURL: url,
});

export const get_divisions = async () => {
  try {
    const res = await api.get("/divisions");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const add_division = async (data) => {
  try {
    const res = await api.post("/division/", { title: data.title });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const get_division = async (id) => {
  try {
    const res = await api.get(`/division/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const update_division = async (id, data) => {
  try {
    const res = await api.get(`/division/${id}`, { title: data.title });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
