import axios from "axios";
// @ts-ignore
import Cookies from "js-cookie";
import {EGANOW_AUTH_COOKIE} from "@/constants";

const baseURL = "https://business-gateway-api.core.uateganowapi.com";
const token = Cookies.get(EGANOW_AUTH_COOKIE);

console.log("token", token)
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
