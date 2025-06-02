import { useMutation } from "@tanstack/react-query";
import apiInstance from "../../utils/api.util";

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (user: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phoneNo: string;
      inviteCode?: string;
    }) => {
      return apiInstance.post("/signup", user);
    },
  });
};
