import { CreateBooking } from "../interfaces/BookingInterface";
import axiosClient from "./axiosClient";

const bookingApi = {
  createBooking: (data: CreateBooking) => {
    const url = "/Booking/CreateBooking";
    return axiosClient.post(url, data);
  },
  getAll: () => {
    const url = "/Booking/GetAllBookings";
    return axiosClient.get(url);
  },
  getBookingOfSaptoi: (username: string | null) => {
    const url = `/Booking/GetAllBookingsByUsername/${username}`;
    return axiosClient.get(url);
  },
  updateStatusToPaid: (bookingId: string) => {
    const url = `/Booking/update-status-to-paid/${bookingId}`;
    return axiosClient.put(url);
  },
  updateStatusToUnPaid: (bookingId: string) => {
    const url = `/Booking/update-status-to-unpaid/${bookingId}`;
    return axiosClient.put(url);
  },
};

export default bookingApi;
