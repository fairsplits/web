import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,
});

export default apiInstance;
