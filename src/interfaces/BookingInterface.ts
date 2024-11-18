export interface CreateBooking {
  bookingId: string;
  username: string | null;
  spaceId: string | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
  numberOfPeople: number | undefined;
}

export interface Booking {
  bookingId: string;
  username: string;
  spaceId: string;
  paymentId: string;
  bookingDate: Date;
  startTime: Date;
  endTime: Date;
  numberOfPeople: number;
  totalAmount: number;
  depositAmount: number;
  remainingAmount: number;
  location: string;
  status: string;
  businessName: string;
  title: string;
  description: string;
  pricePerHour: number;
  roomType: string;
  capacity: number;
  imageUrl: undefined | string;
}
