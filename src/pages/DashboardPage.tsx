import { useEffect } from "react";
import AlbumsList from "../components/albumsList/AlbumsList";
import DashboardDefaultImg from "../components/dasboardDefaultImg/DashboardDefaultImg";
import DashboardNotify from "../components/dashboardNotify/DashboardNotify";
import Footer from "../components/footer/Footer";
import PhotosList from "../components/photosList/PhotosList";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAlbumsThunk } from "../redux/albums/albumsOperations";
import { getAlbumsStore } from "../redux/albums/albumsSelectors";

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const albumsFromStore = useAppSelector(getAlbumsStore);

  const reversedAlbums = [];
  for (let i = albumsFromStore.length - 1; i >= 0; i--) {
    reversedAlbums.push(albumsFromStore[i]);
  }

  useEffect(() => {
    dispatch(getAlbumsThunk());
  }, [dispatch]);

  const allPhotos = reversedAlbums.reduce((acc: {}[], album: any) => {
    return [...acc, ...album.photos];
  }, []);

  return reversedAlbums.length ? (
    <>
      <AlbumsList albums={reversedAlbums} />
      <PhotosList
        allPhotos={allPhotos}
        isExistUnlock={reversedAlbums.length === 1 ? true : false}
      />
    </>
  ) : (
    <>
      <DashboardNotify />
      <DashboardDefaultImg />
      <Footer />
    </>
  );
};

export default DashboardPage;
