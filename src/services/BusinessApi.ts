import { SignUpCompany } from "../interfaces/BusinessInterface";
import axiosClient from "./axiosClient";

const BusinessApi = {
  getAll() {
    const url = "/Business/GetAllBusiness";
    return axiosClient.get(url);
  },
  createBusiness: (data: SignUpCompany) => {
    const url = "/Business/CreateBusiness";
    return axiosClient.post(url, data);
  },
};

export default BusinessApi;
