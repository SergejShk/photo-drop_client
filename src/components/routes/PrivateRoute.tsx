import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { isExistToken } from "../../redux/auth/authSelectors";

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(isExistToken);

  return (
    <Suspense fallback={<></>}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Suspense>
  );
};

export default PrivateRoute;
