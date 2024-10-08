import axiosClient from "./axiosClient";

const WorkingSpaceApi = {
  getAll: () => {
    const url = `/WorkingSpace/GetAll`;
    return axiosClient.get(url);
  },
};

export default WorkingSpaceApi;
