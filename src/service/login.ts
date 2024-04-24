import { LoginFormValues } from "../interfaces/forms/formProps";
import { errorMessage, errorNotifier } from "../main";
import http, { AUTH_ROUTES } from "./api";

export const loginUser = async (
  payload: LoginFormValues,
  setLoading: (arg: boolean) => void
) => {
  try {
    const {
      data: { data },
    } = await http.post(AUTH_ROUTES.LOGIN, payload);
    setLoading(false);
    const token = data?.token;
    if (!token) {
      errorNotifier("Failed to get token");
      window.location.reload();
    } else {
      sessionStorage.setItem("#ACCOUNTFE#", token);
      window.location.href = "/";
    }
  } catch (e: any) {
    setLoading(false);
    errorNotifier(errorMessage(e));
  }
};
