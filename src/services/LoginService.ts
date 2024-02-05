import axios, { AxiosError, AxiosResponse } from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const loginService = axios.create({
  baseURL,
});

export interface SignInDto {
  phoneNumber: string;
}

export const submitPhoneNumber = async (data: SignInDto): Promise<void> => {
  try {
    await loginService.post('/user/signin', data);
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

export const submitSmsCode = async (smsCode: string): Promise<void> => {
  try {
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
