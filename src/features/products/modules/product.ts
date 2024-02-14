export interface Product {
  id: number;
  count: number;
  // Add other properties of your product here
}

export interface ProductStoreState {
  cartData: Product[];
  length: number;
}

export interface addProductObj {
  id?: number | string;
  name: string;
  description: string;
  total_count: number;
  price: string;
  mfg: string;
  life: string;
  qr_code: string;
  unit_of_measure: string;
  value: string;
  brand: string;
}

export interface productObj {
  id?: number | string;
  name: string;
  description: string;
  total_count: number;
  price: string;
  mfg: string;
  life: string;
  qr_code: string;
  unit_of_measure: string;
  value: string;
  brand: string;
  media: [
    {
      product_id: number;
      media_link: string;
    }
  ];
}

export interface updateProduct {
  id: number;
  name: string;
  description: string;
  total_count: number;
  price: string;
  mfg: string;
  life: string;
  qr_code: string;
  unit_of_measure: string;
  value: string;
  brand: string;
}
