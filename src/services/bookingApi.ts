import { CreateBooking } from "../interfaces/BookingInterface";
import axiosClient from "./axiosClient";

const bookingApi = {
  createBooking: (data: CreateBooking) => {
    const url = "/Booking/CreateBooking";
    return axiosClient.post(url, data);
  },
};

export default bookingApi;
