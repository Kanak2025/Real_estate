import Cookies from "js-cookie";
import { create } from "zustand";
import { JwtPayload, jwtDecode } from "jwt-decode";

type State = {
  user: {
    _id: string;
    role: string;
  } | null;
  token: string;
};

type Actions = {
  setToken(token: string): void;
};

export const useAuthStore = create<State & Actions>((set) => {
  const token = Cookies.get("token") || "";
  let user: State["user"] = null;

  if (token && token !== "") {
    const decoded = jwtDecode<JwtPayload & { _id: string; role: string }>(
      token
    );
    user = {
      _id: decoded._id,
      role: decoded.role,
    };
  }

  return {
    user,
    token,
    setToken: (jwt: string) =>
      set((state) => {
        Cookies.set("token", jwt, { sameSite: "none", secure: true });

        return { ...state, token: jwt };
      }),
  };
});