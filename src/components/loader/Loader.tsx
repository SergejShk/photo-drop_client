import {
  ContainerLoader,
  LoaderImg,
  LoaderText,
} from "./LoaderContainer.styled";
import loader from "../../assets/gif-loader.gif";

const Loader: React.FC = () => {
  return (
    <ContainerLoader>
      <LoaderImg src={loader} alt="loader" />
      <LoaderText>Almost there...</LoaderText>
    </ContainerLoader>
  );
};

export default Loader;
