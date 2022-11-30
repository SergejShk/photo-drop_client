import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getAlbumsThunk } from "../../../store/albums/albumsOperations";
import { getAlbumsStore } from "../../../store/albums/albumsSelectors";
import PhotosList from "../../shared/photosList/PhotosList";
import AlbumsList from "./components/albumsList/AlbumsList";
import DashboardDefaultImg from "./components/dasboardDefaultImg/DashboardDefaultImg";
import DashboardNotify from "./components/dashboardNotify/DashboardNotify";

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const albumsFromStore = useAppSelector(getAlbumsStore);

  const reversedAlbums = [];
  for (let i = albumsFromStore.length - 1; i >= 0; i--) {
    reversedAlbums.push(albumsFromStore[i]);
  }

  useEffect(() => {
    !albumsFromStore.length && dispatch(getAlbumsThunk());
  }, [albumsFromStore.length, dispatch]);

  return reversedAlbums.length ? (
    <>
      <AlbumsList albums={reversedAlbums} />
      <PhotosList
        albums={reversedAlbums}
        albumId={albumsFromStore.length === 1 ? albumsFromStore[0].id : ""}
      />
    </>
  ) : (
    <>
      <DashboardNotify />
      <DashboardDefaultImg />
    </>
  );
};

export default DashboardPage;
