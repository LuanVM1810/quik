import axiosClient from "./axiosClient";

const reviewApi = {
  getReviewById: (spaceId: string | undefined) => {
    const url = `/Review/GetReviewsBySpaceId/${spaceId}`;
    return axiosClient.get(url);
  },
};

export default reviewApi;
