import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { isExistToken, isLoadingStore } from "../../redux/auth/authSelectors";
import { getSelfieStore } from "../../redux/user/userSelectors";
import Loader from "../loader/Loader";

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isLoading = useAppSelector(isLoadingStore);
  const isExistSelfie = useAppSelector(getSelfieStore);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<></>}>
      {isLoggedIn && isExistSelfie ? children : <Navigate to="/auth" />}
    </Suspense>
  );
};

export default PrivateRoute;
