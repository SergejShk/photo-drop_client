import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { Albums } from "../../types/albumsType";
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
  albums: Albums;
  albumId: string;
}

const PhotosList: React.FC<IProps> = ({ albums, albumId }) => {
  const [selectedAlbumId, setSelectedAlbumId] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });
  const { pathname } = useLocation();

  const onClickPhoto = (albumId: string, purchased: boolean) => {
    setSelectedAlbumId(albumId);
    setIsPurchased(purchased);
    setIsOpenModal(true);
  };

  return (
    <>
      {pathname === "/dashboard" && <TitlePhotos>All photos</TitlePhotos>}

      <WrapperPhotos>
        <ListPhotos>
          {albums.map((album) =>
            album.photos.map((photo) => (
              <ItemPhotos
                key={photo.thumbnail}
                onClick={() => onClickPhoto(album.id, album.purchased)}
              >
                <ImagePhotos src={photo.thumbnail} alt="photo" />
              </ItemPhotos>
            ))
          )}
        </ListPhotos>

        {albumId && <ButtonUnlock albumId={albumId} />}
        {isMobile && <Footer />}
      </WrapperPhotos>
    </>
  );
};

export default PhotosList;
