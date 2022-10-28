import { useEffect } from "react";
import DashboardDefaultImg from "../components/dasboardDefaultImg/DashboardDefaultImg";
import DashboardNotify from "../components/dashboardNotify/DashboardNotify";
import Footer from "../components/footer/Footer";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getAlbumsThunk } from "../redux/albums/albumsOperations";

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbumsThunk());
  }, [dispatch]);

  return (
    <>
      <DashboardNotify />
      <DashboardDefaultImg />
      <Footer/>
    </>
  );
};

export default DashboardPage;
