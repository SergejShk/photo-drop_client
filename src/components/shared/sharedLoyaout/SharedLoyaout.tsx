import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getAlbumAndPhotosByAlbumId } from "../../../hooks/photosByAlbumId";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { getAlbumsStore } from "../../../store/albums/albumsSelectors";
import {
  isExistToken,
  isLoadingDataStore,
} from "../../../store/auth/authSelectors";
import { getSelfieStore } from "../../../store/user/userSelectors";
import { isNotGoBack, isSelfie } from "../../../utils/headerContent";
import Container from "../container/Container";
import Header from "../header/Header";

const SharedLoyaout: React.FC = () => {
  const { albumId } = useParams();
  const isLoggedIn = useAppSelector(isExistToken);
  const isLoading = useAppSelector(isLoadingDataStore);
  const selfie = useAppSelector(getSelfieStore);
  const albums = useAppSelector(getAlbumsStore);
  const { album } = getAlbumAndPhotosByAlbumId(albums, albumId!);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      isLoggedIn ? navigate("onboard") : navigate("auth");
    }
  }, [isLoggedIn, navigate, pathname]);

  return (
    <>
      {!isLoading && !albumId && (
        <Header
          goBack={!isNotGoBack.includes(pathname) ? true : false}
          selfie={isSelfie.includes(pathname) ? selfie : ""}
        />
      )}

      {!isLoading && albumId && <Header goBack album={album} />}

      <Container>
        <main>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLoyaout;
