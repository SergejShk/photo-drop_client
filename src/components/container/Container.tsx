import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import {
  ContainerCommon,
  ContainerDashboard,
  ContainerTextPage,
} from "./Container.style";

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  if (pathname === "/policy" || pathname === "/terms") {
    return <ContainerTextPage>{children}</ContainerTextPage>;
  } else if (pathname === "/dashboard") {
    return (
      <>
        <ContainerDashboard>{children}</ContainerDashboard>
        {isDesktop && <Footer />}
      </>
    );
  } else {
    return <ContainerCommon>{children}</ContainerCommon>;
  }
};

export default Container;
