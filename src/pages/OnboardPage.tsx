import { Navigate } from "react-router-dom";
import Header from "../components/header/Header";
import AddSelfie from "../components/onboard/Onboard";
import { useAppSelector } from "../hooks/reduxHooks";
import { getSelfieStore } from "../redux/user/userSelectors";

const OnboardPage: React.FC = () => {
  const selfie = useAppSelector(getSelfieStore);

  return !selfie ? (
    <>
      <Header goBack />
      <AddSelfie />
    </>
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default OnboardPage;
