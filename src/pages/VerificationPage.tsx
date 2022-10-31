import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerificationForm from "../components/varificationForm/VerificationForm";
import { useAppSelector } from "../hooks/reduxHooks";
import { isExistToken } from "../redux/auth/authSelectors";
import { getSelfieStore } from "../redux/user/userSelectors";

const VerificationPage: React.FC = () => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isExistSelfie = useAppSelector(getSelfieStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && !isExistSelfie) navigate("/onboard");
    if (isLoggedIn && isExistSelfie) navigate("/dashboard");
  }, [isExistSelfie, isLoggedIn, navigate]);

  return <VerificationForm />;
};

export default VerificationPage;
