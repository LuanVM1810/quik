export interface CreateBooking {
  bookingId: string;
  username: string | null;
  spaceId: string | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
  numberOfPeople: number | undefined;
}
