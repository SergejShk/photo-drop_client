import React, { Suspense, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  getNumber,
  isExistToken,
  isLoadingDataStore,
} from "../../store/auth/authSelectors";
import { getSelfieStore } from "../../store/user/userSelectors";
import Loader from "../shared/loader/Loader";

interface IProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isExistSelfie = useAppSelector(getSelfieStore);
  const isLoading = useAppSelector(isLoadingDataStore);
  const number = useAppSelector(getNumber);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/verification" && !number) navigate("/auth");
  }, [navigate, number, pathname]);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<></>}>
      {isLoggedIn && isExistSelfie ? <Navigate to="/dashboard" /> : children}
    </Suspense>
  );
};

export default PublicRoute;
