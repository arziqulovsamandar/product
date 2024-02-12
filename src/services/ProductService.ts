import axios, { AxiosError, AxiosResponse } from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const productService = axios.create({
  baseURL,
});

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  total_count: number;
  mfg: string;
  life: string;
  qr_code: string;
  value: string;
  brand: string;
  is_active: string;
  unit_of_measure: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await productService.get('/api/product/all');
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

const handleRequestError = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    console.error('Axios request failed:', error.message);
    console.error('Status:', error.response?.status);
    console.error('Data:', error.response?.data);
  } else {
    console.error('An error occurred while making the request:', error);
  }
};
