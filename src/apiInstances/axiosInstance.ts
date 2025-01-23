import axios from "axios";
// @ts-ignore
import Cookies from "js-cookie";
import { EGANOW_AUTH_COOKIE } from "@/constants";

const baseURL = "https://business-gateway-api.core.uateganowapi.com";
const tokenString = Cookies.get(EGANOW_AUTH_COOKIE);

let token = "";
if (tokenString) {
  const tokenObject = JSON.parse(tokenString);
  token = tokenObject.accessToken;
}

console.log("Token:", token); // Log the token

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
