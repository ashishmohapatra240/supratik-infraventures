export interface Property {
  id: number;
  name: string;
  size: string;
  type: string;
  description: string;
  image: string;
  amenities: {
    icon: string;
    label: string;
  }[];
} 