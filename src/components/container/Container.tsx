import { useLocation } from "react-router-dom";
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

  if (pathname === "/policy" || pathname === "/terms") {
    return <ContainerTextPage>{children}</ContainerTextPage>;
  } else if (pathname === "/dashboard") {
    return <ContainerDashboard>{children}</ContainerDashboard>;
  } else {
    return <ContainerCommon>{children}</ContainerCommon>;
  }
};

export default Container;
