import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./../routes/PrivateRoute";
import PublicRoute from "./../routes/PublicRoute";
import SharedLoyaout from "./../shared/sharedLoyaout/SharedLoyaout";
import {
  privateRoutes,
  publicRoutes,
  routes as routesArr,
} from "./RoutesHelper";

const RoutesComp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyaout />}>
        {routesArr.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicRoute>{route.element}</PublicRoute>}
          />
        ))}
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PrivateRoute>{route.element}</PrivateRoute>}
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesComp;
