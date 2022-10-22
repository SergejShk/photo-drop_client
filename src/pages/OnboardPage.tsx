import { Navigate } from "react-router-dom";
import AddSelfie from "../components/onboard/Onboard";
import { useAppSelector } from "../hooks/reduxHooks";
import { getSelfieStore } from "../redux/user/userSelectors";

const OnboardPage: React.FC = () => {
  const selfie = useAppSelector(getSelfieStore);

  return !selfie ? <AddSelfie /> : <Navigate to="/dashboard" />;
};

export default OnboardPage;
