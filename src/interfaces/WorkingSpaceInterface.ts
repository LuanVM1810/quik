export interface WorkingSpace {
  spaceId: string;
  businessId: string;
  businessName: string;
  imageId: string;
  title: string;
  description: string;
  pricePerHour: number;
  rating: number;
  roomType: string;
  capacity: number;
  location: string;
  image: null;
  imageUrls: string[];
}

export interface WorkingSpaceDetail extends WorkingSpace {
  amenities: Amenity[];
}

export interface Amenity {
  amenityId: string;
  amenityText: string;
}
