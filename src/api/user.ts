import axiosAdmin from '../plugins/axios.ts';
import { UserOtp, UserVerify } from '../features/users/modules';

const url = import.meta.env.VITE_BASE_URL;

export function otp(payload: UserOtp) {
  console.log(payload);
  return axiosAdmin.post(url + '/api/user/otp/', payload);
}

export function verify(code:UserVerify){
  console.log(code);

  return axiosAdmin.post(url + '/api/user/verify/', code)
}
