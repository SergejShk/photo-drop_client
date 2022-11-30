import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getNumber } from "../../../store/auth/authSelectors";
import { resetAccessToken, resetNumber } from "../../../store/auth/authSlice";
import { resetSelfie } from "../../../store/user/userSlice";
import AuthForm from "./components/authForm/AuthForm";

const HomePage: React.FC = () => {
  const number = useAppSelector(getNumber);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetSelfie(""));
    dispatch(resetAccessToken(""));
    dispatch(resetNumber(""));
  }, [dispatch]);

  useEffect(() => {
    number && navigate("/verification");
  }, [navigate, number]);

  return <AuthForm />;
};

export default HomePage;
