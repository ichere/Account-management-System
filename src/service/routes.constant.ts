export const AUTH_ROUTES = {
    //USER
    LOGIN: "/user/login",
    CREATE_USER: "/user",
    VERIFY_EMAIL: (token: string) => `/user/verifyEmail/${token}`,
    UPDATE_USER: (userId: number) => `/user/${userId}`,
    RESET_PASSWORD: "/user/resetPassword",
    CHANGE_PASSWORD: "/user/changePassword",
    RECOVER_PASSWORD: "/user/recoverPassword",
  
    //PROFILE
    PROFILE: (userId?: number) => `/profile?userId=${userId}`,
    PROFILE_BY_ID: (profileId: number) => `/todo/${profileId}`,
    GET_PROFILES_BY_IDS: (...rest: []) => `/todo/ids/${rest}`,
  };
  