import DashboardDefaultImg from "../components/dasboardDefaultImg/DashboardDefaultImg";
import DashboardNotify from "../components/dashboardNotify/DashboardNotify";

const DashboardPage: React.FC = () => {
  return (
    <>
      <DashboardNotify />
      <DashboardDefaultImg />
    </>
  );
};

export default DashboardPage;
