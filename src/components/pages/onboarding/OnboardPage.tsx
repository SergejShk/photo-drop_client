import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { isExistToken } from "../../../store/auth/authSelectors";
import { getSelfieStore } from "../../../store/user/userSelectors";
import AddSelfie from "./components/onboard/Onboard";

const OnboardPage: React.FC = () => {
  const selfie = useAppSelector(getSelfieStore);
  const isLoggedIn = useAppSelector(isExistToken);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && selfie && navigate("/dashboard");
  }, [isLoggedIn, navigate, selfie]);

  return isLoggedIn ? <AddSelfie /> : <Navigate to="/auth" />;
};

export default OnboardPage;
