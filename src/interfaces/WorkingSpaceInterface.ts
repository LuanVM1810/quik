export interface WorkingSpace {
  spaceId: string;
  businessId: string;
  imageId: string;
  title: string;
  description: string;
  pricePerHour: number;
  roomType: string;
  capacity: number;
  location: string;
  image: null;
}

export interface WorkingSpaceDetail extends WorkingSpace {
  amenities: Amenity[];
}

export interface Amenity {
  amenityId: string;
  amenityText: string;
}
