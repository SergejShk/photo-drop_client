import React, { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getMustCurUser, getTokenStore } from "../redux/auth/authSelectors";
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
const AlbumPage = lazy(() => import("../pages/AlbumPage"));

const App: React.FC = () => {
  const token = useAppSelector(getTokenStore);
  const isMustCurUser = useAppSelector(getMustCurUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    isMustCurUser && dispatch(getUserDataThunk());
  }, [dispatch, isMustCurUser]);

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
          path="edit_name"
          element={
            <PrivateRoute>
              <EditNamePage />
            </PrivateRoute>
          }
        />
        <Route
          path="album/:albumId"
          element={
            <PrivateRoute>
              <AlbumPage />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
