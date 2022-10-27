import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { isExistToken } from "../../redux/auth/authSelectors";
import { getSelfieStore } from "../../redux/user/userSelectors";

interface IProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isExistSelfie = useAppSelector(getSelfieStore);

  return (
    <Suspense fallback={<></>}>
      {isLoggedIn && isExistSelfie ? <Navigate to="/dashboard" /> : children}
    </Suspense>
  );
};

export default PublicRoute;
