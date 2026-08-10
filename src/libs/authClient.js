const STORAGE_KEY = "accessToken";

let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token || null;
  if (typeof window !== "undefined") {
    if (token) {
      window.localStorage.setItem(STORAGE_KEY, token);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }
};

export const getAccessToken = () => {
  if (!accessToken && typeof window !== "undefined") {
    accessToken = window.localStorage.getItem(STORAGE_KEY);
  }
  return accessToken;
};

export const clearAccessToken = () => setAccessToken(null);
