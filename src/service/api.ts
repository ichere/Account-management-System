import axios, { AxiosHeaders } from "axios";

export * from "./routes.constant";

export const baseURL = "https://isw-accountmgt-gp1-be.onrender.com/swagger/index.html";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

const addTokenToRequest = async (req: any) => {
  const token = sessionStorage.getItem("#BOOKKIPAFE#");
  req.headers = { ...req.headers } as AxiosHeaders;
  if (req.headers) {
    req.headers.Authorization = token;
  } else {
    req.headers = {
      Authorization: token,
    };
  }
  return req;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
