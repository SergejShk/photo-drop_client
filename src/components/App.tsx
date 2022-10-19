import React, { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import DashboardPage from "../pages/DashboardPage";
import {
  getMustCurUser,
  getTokenStore,
  isExistToken,
} from "../redux/auth/authSelectors";
import { getUserDataThunk } from "../redux/user/userOperations";
import { saveToken } from "../services/authApi";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import SharedLoyaout from "./sharedLoyaout/SharedLoyaout";

const HomePage = lazy(() => import("../pages/HomePage"));
const TermsPage = lazy(() => import("../pages/TermsPage"));
const PolicyPage = lazy(() => import("../pages/PolicyPage"));
const VerificationPage = lazy(() => import("../pages/VerificationPage"));
const OnboardPage = lazy(() => import("../pages/OnboardPage"));

const App: React.FC = () => {
  const token = useAppSelector(getTokenStore);
  const dispatch = useAppDispatch();
  const isMustCurUser = useAppSelector(getMustCurUser);
  const isLoggedIn = useAppSelector(isExistToken);

  useEffect(() => {
    isMustCurUser && dispatch(getUserDataThunk());
  }, [dispatch, isMustCurUser]);

  useEffect(() => {
    isLoggedIn && dispatch(getUserDataThunk());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    saveToken.set(token);
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<SharedLoyaout />}>
        <Route
          path="auth"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="terms"
          element={
            <PublicRoute>
              <TermsPage />
            </PublicRoute>
          }
        />
        <Route
          path="policy"
          element={
            <PublicRoute>
              <PolicyPage />
            </PublicRoute>
          }
        />
        <Route
          path="verification"
          element={
            <PublicRoute>
              <VerificationPage />
            </PublicRoute>
          }
        />
        <Route
          path="onboard"
          element={
            <PrivateRoute>
              <OnboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
