import {
  createContext,
  useEffect,
  useContext,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import { loginInfoState } from "../atom/atom";
import { useNavigate, useLocation } from "react-router-dom";

interface props {
  children: React.ReactNode;
}

export const Auth = ({ children }: props) => {
  const { token } = useRecoilValue(loginInfoState);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   if (!token) return navigate("/user");
  //   if (location.pathname === "/user" || location.pathname === "/user/")
  //     return navigate("/user/shops");
  // }, [token]);

  return <div>{children}</div>;
};
