import axiosClient from "./axiosClient";

const BusinessApi = {
  getAll() {
    const url = "/Business/GetAllBusiness";
    return axiosClient.get(url);
  },
};

export default BusinessApi;
