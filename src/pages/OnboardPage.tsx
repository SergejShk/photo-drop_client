import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AddSelfie from "../components/onboard/Onboard";
import { useAppSelector } from "../hooks/reduxHooks";
import { isExistToken } from "../redux/auth/authSelectors";
import { getSelfieStore } from "../redux/user/userSelectors";

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
