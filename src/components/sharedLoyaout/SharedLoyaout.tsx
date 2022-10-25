import React, { useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { isExistToken, isLoadingStore } from "../../redux/auth/authSelectors";
import { getSelfieStore } from "../../redux/user/userSelectors";
import { isGoBack, isSelfie } from "../../utils/headerContent";
import Container from "../container/Container";
import Header from "../header/Header";

const SharedLoyaout: React.FC = () => {
  const isLoadingPage = useAppSelector(isLoadingStore);
  const isLoggedIn = useAppSelector(isExistToken);
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
      {!isLoadingPage && (
        <Header
          goBack={isGoBack.includes(pathname) ? true : false}
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
