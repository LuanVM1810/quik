export interface Business {
  businessId: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  location: string;
  description: string;
  rating: number;
}

export interface SignUpCompany {
  businessId: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  password: string;
  location: string;
  description: string;
}
