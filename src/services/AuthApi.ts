import { SignInRequest, SingnUpRequest } from "../interfaces/AuthInterface";
import axiosClient from "./axiosClient";

const authApi = {
  singIn: (data: SignInRequest) => {
    const url = "/Authorize/GenerateToken";
    return axiosClient.post(url, data);
  },
  signUp: (data: SingnUpRequest) => {
    const url = "/User/UserRegisteration";
    return axiosClient.post(url, data);
  },
};

export default authApi;
