import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const productService = axios.create({
  baseURL,
});
import { productData} from '../modules/interface'

export const fetchProducts = async (): Promise<productData[]> => {
  try {
    const response: AxiosResponse<productData[]> = await productService.get(
      "/api/product/all",
    );
    return response.data;
  } catch (error: any) {
    handleRequestError(error);
    throw error;
  }
};

const handleRequestError = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    console.error("Axios request failed:", error.message);
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
  } else {
    console.error("An error occurred while making the request:", error);
  }
};
