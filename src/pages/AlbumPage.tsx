import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPhotosByAlbumId } from "../hooks/photosByAlbumId";
import { useAppSelector } from "../hooks/reduxHooks";
import { getAlbumsStore } from "../redux/albums/albumsSelectors";

const AlbumPage = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const albums = useAppSelector(getAlbumsStore);
  const photos = getPhotosByAlbumId(albums, albumId!);
  console.log(photos);

  useEffect(() => {
    !photos.length && navigate("/dashboard");
  }, [navigate, photos.length]);

  return <></>;
};

export default AlbumPage;
