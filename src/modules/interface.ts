export interface personData {
  id: number;
  name: string;
}
export interface productData {
  basketItems: [];
  brand: string;
  category: [];
  category_id: number;
  comment: [];
  createdAt: Date;
  description: string;
  discount_product: [];
  id: number;
  is_active: boolean;
  life: string;
  media: [];
  mfg: string;
  name: string;
  price: string;
  qr_code: string;
  store: [];
  total_count: number;
  unit_of_measure: string;
  updatedAt: Date;
  value: string;
}

export interface cartObj {
  id?: string;
  price?: string;
}
