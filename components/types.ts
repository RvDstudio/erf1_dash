// components/types.ts-
export interface Product {
  id: string;
  name: string;
  regular_price: number;
  images: { src: string }[];
  stock_status: "instock" | "outofstock";
}

export interface Zuivel {
  id: string;
  name: string;
  images: { src: string }[];
  regular_price: string;
  stock_status: string;
}
export interface Kaas {
  id: string;
  name: string;
  images: { src: string }[];
  regular_price: string;
  stock_status: string;
}

export interface Vlees {
  id: string;
  name: string;
  images: { src: string }[];
  regular_price: string;
  stock_status: string;
}
