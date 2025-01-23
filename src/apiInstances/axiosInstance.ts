import axios from "axios";
// @ts-ignore
import Cookies from "js-cookie";
import { EGANOW_AUTH_COOKIE } from "@/constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL ;
const tokenString = Cookies.get(EGANOW_AUTH_COOKIE);

let token = "";
if (tokenString) {
  const tokenObject = JSON.parse(tokenString);
  token = tokenObject.accessToken;
}

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
