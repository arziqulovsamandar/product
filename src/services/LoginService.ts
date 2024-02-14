import axios, { AxiosError } from "axios";
import decodeJwt from "../functions/tokenParser";

const baseURL = import.meta.env.VITE_BASE_URL;

const loginService = axios.create({
  baseURL,
});

export interface SignInDto {
  phoneNumber: string;
}

const handleRequestError = (error: AxiosError | any): void => {
  if (axios.isAxiosError(error)) {
    console.error("Axios request failed:", error.message);
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
  } else {
    console.error("An error occurred while making the request:", error);
  }
};

export const submitPhoneNumber = async (data: SignInDto): Promise<void> => {
  try {
    await loginService.post("http://34.136.49.137:4000/api/user/otp", data);
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

export const submitOtp = async (otp: string): Promise<void> => {
  try {
    await loginService.post("http://34.136.49.137:4000/api/user/otp", { otp });
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

export const checkAuthentication = (): boolean => {
  const token = localStorage.getItem("accessToken");
  if (!token) return false;
  try {
    const decodedToken = decodeJwt(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken.exp < currentTime) return false;
    return true;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};
