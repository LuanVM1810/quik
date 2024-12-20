export interface Review {
  reviews: ReviewElement[];
}

export interface ReviewElement {
  reviewId: string;
  username: string;
  spaceId: string;
  rating: number;
  comment: string;
  title: string;
  createdAt: Date;
}
