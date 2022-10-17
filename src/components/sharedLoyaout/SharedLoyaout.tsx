import React, { useEffect, Suspense } from "react";
import Header from "../header/Header";
import Container from "../container/Container";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { isExistToken } from "../../redux/auth/authSelectors";

const SharedLoyaout: React.FC = () => {
  const isLoggedIn = useAppSelector(isExistToken);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      isLoggedIn ? navigate("onboard") : navigate("auth");
    }
  }, [isLoggedIn, navigate, pathname]);

  return (
    <>
      {pathname !== "/" && <Header />}
      <main>
        <Container>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLoyaout;
