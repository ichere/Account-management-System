
import { ProfileFields } from "../interfaces/forms/formProps";
import { errorMessage, errorNotifier, successNotifier } from "../main";
import http, { AUTH_ROUTES } from "./api";

export const createProfile = async (
  payload: ProfileFields,
  setLoading: (arg: boolean) => void,
  setRefresh: (arg: boolean) => void,
  refresh: boolean
) => {
  try {
    await http.post(AUTH_ROUTES.PROFILE(), payload);
    setLoading(false);
    successNotifier("Profile successfully created");
    setRefresh(!refresh);
  } catch (e: any) {
    setLoading(false);
    errorNotifier(errorMessage(e));
  }
};

export const getAllProfiles = async (
  setProfiles: (arg: []) => void,
  setLoading: (arg: boolean) => void
) => {
  try {
    const {
      data: { data },
    } = await http.get(AUTH_ROUTES.PROFILE(3));
    console.log("ALL PROFILES", data);
    setLoading(false);
    setProfiles(data);
  } catch (e: any) {
    setLoading(false);
    errorNotifier(errorMessage(e));
  }
};
