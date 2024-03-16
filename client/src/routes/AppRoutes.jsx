import { Routes, Route } from "react-router-dom";
import { appRoutesConstants } from "./routesConstants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={appRoutesConstants.home.path}
        element={appRoutesConstants.home.element}
      />
      <Route
        path={appRoutesConstants.authentication.path}
        element={<appRoutesConstants.authentication.element />}
      />
      <Route
        path={appRoutesConstants.customerManagement.path}
        element={<appRoutesConstants.customerManagement.element />}
      />
      <Route
        path={appRoutesConstants.pageNotFound.path}
        element={<appRoutesConstants.pageNotFound.element />}
      />
    </Routes>
  );
};

export default AppRoutes;
