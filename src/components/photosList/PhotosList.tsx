import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { Albums } from "../../types/albumsType";
import ButtonUnlock from "../buttonUnlock/ButtonUnlock";
import Footer from "../footer/Footer";
import ModalLandscape from "../modalLandscape/ModalLandscape";
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
  const [selectedPhotoSrc, setSelectedPhotoSrc] = useState("");
  const [selectedPhotoLocation, setSelectedPhotoLocation] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });
  const { pathname } = useLocation();

  const onClickPhoto = (
    albumId: string,
    purchased: boolean,
    photoSrc: string,
    location: string
  ) => {
    setSelectedAlbumId(albumId);
    setIsPurchased(purchased);
    setSelectedPhotoSrc(photoSrc);
    setSelectedPhotoLocation(location);
    toogleModal();
  };

  const toogleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {pathname === "/dashboard" && <TitlePhotos>All photos</TitlePhotos>}

      {!isModalOpen && (
        <WrapperPhotos>
          <ListPhotos>
            {albums.map((album) =>
              album.photos.map((photo) => (
                <ItemPhotos
                  key={photo.thumbnail}
                  onClick={() =>
                    onClickPhoto(
                      album.id,
                      album.purchased,
                      photo.original,
                      album.location
                    )
                  }
                >
                  <ImagePhotos src={photo.thumbnail} alt="photo" />
                </ItemPhotos>
              ))
            )}
          </ListPhotos>

          {albumId && <ButtonUnlock albumId={albumId} />}
          {isMobile && <Footer />}
        </WrapperPhotos>
      )}
      {isModalOpen && (
        <ModalLandscape
          albumId={selectedAlbumId}
          purchased={isPurchased}
          photoSrc={selectedPhotoSrc}
          location={selectedPhotoLocation}
          toogleModal={toogleModal}
        />
      )}
    </>
  );
};

export default PhotosList;
