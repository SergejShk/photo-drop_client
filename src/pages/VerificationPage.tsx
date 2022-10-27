import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerificationForm from "../components/varificationForm/VerificationForm";
import { useAppSelector } from "../hooks/reduxHooks";
import { isExistToken } from "../redux/auth/authSelectors";

const VerificationPage: React.FC = () => {
  const isLoggedIn = useAppSelector(isExistToken);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate("/onboard");
  }, [isLoggedIn, navigate]);

  return <VerificationForm />;
};

export default VerificationPage;
