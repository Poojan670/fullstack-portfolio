import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${process.env.REACT_APP_DEFAULT_TOKEN}`,
  },
});

export default axiosInstance;
