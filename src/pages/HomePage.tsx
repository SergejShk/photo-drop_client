import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/authForm/AuthForm";
import { useAppSelector } from "../hooks/reduxHooks";
import { getNumber } from "../redux/auth/authSelectors";

const HomePage: React.FC = () => {
  const number = useAppSelector(getNumber);
  const navigate = useNavigate();

  useEffect(() => {
    number && navigate("/verification");
  }, [navigate, number]);

  return <AuthForm />;
};

export default HomePage;
