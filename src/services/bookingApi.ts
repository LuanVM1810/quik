import { CreateBooking } from "../interfaces/BookingInterface";
import axiosClient from "./axiosClient";

const bookingApi = {
  createBooking: (data: CreateBooking) => {
    const url = "/Booking/CreateBooking";
    return axiosClient.post(url, data);
  },
  getBookingOfSaptoi: (username: string | null) => {
    const url = `/Booking/GetBookingOfSapToi/${username}`;
    return axiosClient.get(url);
  },
};

export default bookingApi;
