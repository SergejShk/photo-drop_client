import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { isExistToken, isLoadingStore } from "../../redux/auth/authSelectors";
import Loader from "../loader/Loader";

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isLoading = useAppSelector(isLoadingStore);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<></>}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Suspense>
  );
};

export default PrivateRoute;
