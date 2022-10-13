import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerificationForm from "../components/varificationForm/VerificationForm";
import { useAppSelector } from "../hooks/reduxHooks";
import { getNumber } from "../redux/auth/authSelectors";

const VerificationPage: React.FC = () => {
  const number = useAppSelector(getNumber);
  const navigate = useNavigate();

  useEffect(() => {
    !number && navigate("/auth");
  }, [navigate, number]);

  return <VerificationForm />;
};

export default VerificationPage;
