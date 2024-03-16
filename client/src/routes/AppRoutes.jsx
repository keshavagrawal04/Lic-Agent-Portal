import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../components";
import { appRoutesConstants } from "./routesConstants";
import AuthenticationRoutes from "./AuthenticationRoutes";
import CustomerManagementRoutes from "./CustomerManagementRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={appRoutesConstants.home.path} element={"Home Page"} />
      <Route
        path={appRoutesConstants.authentication.path}
        element={<AuthenticationRoutes />}
      />
      <Route
        path={appRoutesConstants.customerManagement.path}
        element={<CustomerManagementRoutes />}
      />
      <Route
        path={appRoutesConstants.pageNotFound.path}
        element={<PageNotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;
