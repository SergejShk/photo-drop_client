import DashboardNotify from "../components/dashboardNotify/DashboardNotify";
import Header from "../components/header/Header";
import { useAppSelector } from "../hooks/reduxHooks";
import { getSelfieStore } from "../redux/user/userSelectors";

const DashboardPage: React.FC = () => {
  const selfie = useAppSelector(getSelfieStore);

  return (
    <>
      <Header selfie={selfie} />
      <DashboardNotify />
    </>
  );
};

export default DashboardPage;
