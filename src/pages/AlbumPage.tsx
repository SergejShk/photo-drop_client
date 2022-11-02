import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhotosList from "../components/photosList/PhotosList";
import { getAlbumAndPhotosByAlbumId } from "../hooks/photosByAlbumId";
import { useAppSelector } from "../hooks/reduxHooks";
import { getAlbumsStore } from "../redux/albums/albumsSelectors";

const AlbumPage = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const albums = useAppSelector(getAlbumsStore);
  const { album } = getAlbumAndPhotosByAlbumId(albums, albumId!);

  useEffect(() => {
    !album?.photos?.length && navigate("/dashboard");
  }, [navigate, album?.photos?.length]);

  return (
    <>
      <PhotosList albums={[album!]} albumId={albumId ? albumId : ""} />
    </>
  );
};

export default AlbumPage;
