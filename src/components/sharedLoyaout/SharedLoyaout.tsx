import React, { useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  isExistToken,
  isLoadingDataStore,
} from "../../redux/auth/authSelectors";
import { getSelfieStore } from "../../redux/user/userSelectors";
import { isNotGoBack, isSelfie } from "../../utils/headerContent";
import Container from "../container/Container";
import Header from "../header/Header";

const SharedLoyaout: React.FC = () => {
  const isLoggedIn = useAppSelector(isExistToken);
  const isLoading = useAppSelector(isLoadingDataStore);
  const selfie = useAppSelector(getSelfieStore);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      isLoggedIn ? navigate("onboard") : navigate("auth");
    }
  }, [isLoggedIn, navigate, pathname]);

  return (
    <>
      {!isLoading && (
        <Header
          goBack={!isNotGoBack.includes(pathname) ? true : false}
          selfie={isSelfie.includes(pathname) ? selfie : ""}
        />
      )}
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
