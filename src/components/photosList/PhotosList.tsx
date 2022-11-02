import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import ButtonUnlock from "../buttonUnlock/ButtonUnlock";
import Footer from "../footer/Footer";
import {
  ImagePhotos,
  ItemPhotos,
  ListPhotos,
  TitlePhotos,
  WrapperPhotos,
} from "./PhotoList.style";

interface IProps {
  allPhotos: {}[];
  albumId: string;
}

const PhotosList: React.FC<IProps> = ({ allPhotos, albumId }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/dashboard" && <TitlePhotos>All photos</TitlePhotos>}

      <WrapperPhotos>
        <ListPhotos>
          {allPhotos.map((photo: any) => (
            <ItemPhotos key={photo.thumbnail}>
              <ImagePhotos src={photo.thumbnail} alt="photo" />
            </ItemPhotos>
          ))}
        </ListPhotos>

        {albumId && <ButtonUnlock albumId={albumId} />}
        {isMobile && <Footer />}
      </WrapperPhotos>
    </>
  );
};

export default PhotosList;
