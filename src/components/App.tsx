import React, { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
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
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const EditNamePage = lazy(() => import("../pages/EditNamePage"));
const EditEmailPage = lazy(() => import("../pages/EditEmailPage"));
const AccountSettingsPage = lazy(() => import("../pages/AccountSettingsPage"));
const NotificationSettingsPage = lazy(
  () => import("../pages/NotificationSettingsPage")
);

const App: React.FC = () => {
  const token = useAppSelector(getTokenStore);
  const isMustCurUser = useAppSelector(getMustCurUser);
  const isLoggedIn = useAppSelector(isExistToken);

  const dispatch = useAppDispatch();

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

        <Route path="terms" element={<TermsPage />} />
        <Route path="policy" element={<PolicyPage />} />

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
            <PublicRoute>
              <OnboardPage />
            </PublicRoute>
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
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="edit-name"
          element={
            <PrivateRoute>
              <EditNamePage />
            </PrivateRoute>
          }
        />
        <Route
          path="account-settings"
          element={
            <PrivateRoute>
              <AccountSettingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="edit-email"
          element={
            <PrivateRoute>
              <EditEmailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="notification-settings"
          element={
            <PrivateRoute>
              <NotificationSettingsPage />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
