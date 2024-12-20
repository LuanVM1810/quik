import axiosClient from "./axiosClient";

const userApi = {
  getUserInfor: (username: string | null) => {
    const url = `/User/GetById/${username}`;
    return axiosClient.get(url);
  },
  getAll: () => {
    const url = "/User/GetAll";
    return axiosClient.get(url);
  },
};

export default userApi;
