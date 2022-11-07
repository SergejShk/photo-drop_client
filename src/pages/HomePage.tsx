import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/authForm/AuthForm";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getNumber } from "../redux/auth/authSelectors";
import { resetAccessToken } from "../redux/auth/authSlice";
import { resetSelfie } from "../redux/user/userSlice";

const HomePage: React.FC = () => {
  const number = useAppSelector(getNumber);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetSelfie(""));
    dispatch(resetAccessToken(""));
  }, [dispatch]);

  useEffect(() => {
    number && navigate("/verification");
  }, [navigate, number]);

  return <AuthForm />;
};

export default HomePage;
