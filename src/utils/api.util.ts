import axios from "axios";

const apiInstance = axios.create({
  // baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  baseURL: "https://api.fairsplits.in:9090",
});

export default apiInstance;
