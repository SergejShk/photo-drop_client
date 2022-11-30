import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { isExistToken } from "../../../store/auth/authSelectors";
import { getSelfieStore } from "../../../store/user/userSelectors";
import VerificationForm from "./components/varificationForm/VerificationForm";

const VerificationPage: React.FC = () => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isExistSelfie = useAppSelector(getSelfieStore);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn && !isExistSelfie) navigate("/onboard", { state: location });
    if (isLoggedIn && isExistSelfie) navigate("/dashboard");
  }, [isExistSelfie, isLoggedIn, location, navigate]);

  return <VerificationForm />;
};

export default VerificationPage;
