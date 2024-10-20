import axiosClient from "./axiosClient";

const workingSpaceApi = {
  getAll: () => {
    const url = "/WorkingSpace/GetAll";
    return axiosClient.get(url);
  },
  getById: (spaceId: string | undefined) => {
    const url = `/WorkingSpace/GetById/${spaceId}`;
    return axiosClient.get(url);
  },
};

export default workingSpaceApi;
