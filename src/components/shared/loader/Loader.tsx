import {
  ContainerLoader,
  LoaderImg,
  LoaderText,
} from "./LoaderContainer.styled";

const Loader: React.FC = () => {
  return (
    <ContainerLoader>
      <LoaderImg src="/assets/gif-loader.gif" alt="loader" />
      <LoaderText>Almost there...</LoaderText>
    </ContainerLoader>
  );
};

export default Loader;
