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
  search: (location: string, roomType: string) => {
    const url = `/WorkingSpace/GetAll?location=${location}&type=${roomType}`;
    return axiosClient.get(url);
  },
};

export default workingSpaceApi;
