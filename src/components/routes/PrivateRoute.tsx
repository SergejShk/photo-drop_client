import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  isExistToken,
  isLoadingDataStore,
} from "../../redux/auth/authSelectors";
import Loader from "../loader/Loader";

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isLoading = useAppSelector(isLoadingDataStore);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            backgroundColor: "#ffffff",
          }}
        ></div>
      }
    >
      {isLoggedIn ? children : <Navigate to="/auth" />}
    </Suspense>
  );
};

export default PrivateRoute;
