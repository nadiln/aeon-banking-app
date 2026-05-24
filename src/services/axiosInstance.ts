import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const baseURL = "https://api.aeonbank.mock";

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Setup cache with 5 minute TTL
export const cachedAxiosInstance = setupCache(axiosInstance, {
  ttl: 300000, // 5 minutes in milliseconds
});

export default cachedAxiosInstance;
