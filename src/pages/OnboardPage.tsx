import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import AddSelfie from "../components/onboard/Onboard";
import { useAppSelector } from "../hooks/reduxHooks";
import { selfieUploadedStore } from "../redux/user/userSelectors";

const OnboardPage = () => {
  const selfieLoaded = useAppSelector(selfieUploadedStore);
  const navigate = useNavigate();

  useEffect(() => {
    selfieLoaded && navigate("/dashboard");
  }, [navigate, selfieLoaded]);

  return (
    <>
      <Header goBack />
      <AddSelfie />;
    </>
  );
};

export default OnboardPage;
