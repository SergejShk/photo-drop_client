import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  isExistToken,
  isLoadingDataStore,
} from "../../redux/auth/authSelectors";
import { getSelfieStore } from "../../redux/user/userSelectors";
import Loader from "../loader/Loader";

interface IProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isExistSelfie = useAppSelector(getSelfieStore);
  const isLoading = useAppSelector(isLoadingDataStore);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<></>}>
      {isLoggedIn && isExistSelfie ? <Navigate to="/dashboard" /> : children}
    </Suspense>
  );
};

export default PublicRoute;
