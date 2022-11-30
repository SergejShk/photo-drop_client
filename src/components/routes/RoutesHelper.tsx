import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const TermsPage = lazy(() => import("../pages/termsOfServices/TermsPage"));
const PolicyPage = lazy(() => import("../pages/privacyPolicy/PolicyPage"));
const VerificationPage = lazy(
  () => import("../pages/verification/VerificationPage")
);
const OnboardPage = lazy(() => import("../pages/onboarding/OnboardPage"));
const DashboardPage = lazy(() => import("../pages/dashboard/DashboardPage"));
const ProfilePage = lazy(() => import("../pages/profile/ProfilePage"));
const EditNamePage = lazy(() => import("../pages/editName/EditNamePage"));
const AlbumPage = lazy(() => import("../pages/album/AlbumPage"));
const PaymentSuccessPage = lazy(
  () => import("../pages/paymentSuccess/PaymentSuccessPage")
);

export const routes = [
  {
    path: "terms",
    element: <TermsPage />,
  },
  {
    path: "policy",
    element: <PolicyPage />,
  },

  {
    path: "album",
    element: <Navigate to="/dashboard" />,
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export const publicRoutes = [
  {
    path: "auth",
    element: <HomePage />,
  },
  {
    path: "verification",
    element: <VerificationPage />,
  },
  {
    path: "onboard",
    element: <OnboardPage />,
  },
];

export const privateRoutes = [
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "edit_name",
    element: <EditNamePage />,
  },
  {
    path: "album/:albumId",
    element: <AlbumPage />,
  },
  {
    path: "payment_success",
    element: <PaymentSuccessPage />,
  },
];
