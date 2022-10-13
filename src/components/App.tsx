import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import SharedLoyaout from "./sharedLoyaout/SharedLoyaout";

const HomePage = lazy(() => import("../pages/HomePage"));
const VerificationPage = lazy(() => import("../pages/VerificationPage"));
const OnboardPage = lazy(() => import("../pages/OnboardPage"));

const App: React.FC = () => {
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
        ></Route>
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
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
