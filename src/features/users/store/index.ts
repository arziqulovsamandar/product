import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { UserOtp, UserVerify } from "../../../features/users/modules";
import { otp, verify } from "../../../api/user.ts";
import { successToast } from "../../../utils/toast.ts";
import { useRouter } from "vue-router";
const router = useRouter();
const toast = useToast();

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    codesss: "",
  }),
  actions: {
    async otp(payload: UserOtp) {
      try {
        const res = await otp(payload);
        this.codesss = res.data.Details;
        if (res?.data.tokens?.access_token) {
          localStorage.setItem("access_token", res.data.tokens.access_token);
          router.push({ name: "AdminHome" });
        }
      } catch (err) {
        toast.warning("Error");
      }
    },

    async verifyOtp(code: UserVerify) {
      try {
        const res = await verify(code);
        if (res.status !== 201) {
          toast.error("Code is not correct");
          return;
        }
        router.push({ name: "/LoginName" });
        successToast("Success");
        console.log("Signed in");
      } catch (error) {
        toast.error("Error occured while verifying OTP");
      }
    },
  },
});
