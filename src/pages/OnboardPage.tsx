import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import AddSelfie from "../components/onboard/Onboard";
import { useAppSelector } from "../hooks/reduxHooks";
import { selfieUploadedStore } from "../redux/user/userSelectors";

const OnboardPage = () => {
  const selfieLoaded = useAppSelector(selfieUploadedStore);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    selfieLoaded && navigate("/dashboard", { state: pathname });
  }, [navigate, pathname, selfieLoaded]);

  return (
    <>
      <Header goBack />
      <AddSelfie />;
    </>
  );
};

export default OnboardPage;
