import { Routes, Route } from "react-router-dom";
import { customerManagementRoutesConstants } from "./routesConstants";
import { PageNotFound } from "../components";
import {
  CustomerManagement,
  AddCustomer,
  UpdateCustomer,
  ViewCustomer,
  Customers,
} from "../pages/CustomerManagement";

const CustomerManagementRoutes = () => {
  return (
    <Routes>
      <Route
        path={customerManagementRoutesConstants.customerManagement.path}
        element={<CustomerManagement />}
      />
      <Route
        path={customerManagementRoutesConstants.addCustomer.path}
        element={<AddCustomer />}
      />
      <Route
        path={customerManagementRoutesConstants.customers.path}
        element={<Customers />}
      />
      <Route
        path={customerManagementRoutesConstants.updateCustomer.path}
        element={<UpdateCustomer />}
      />
      <Route
        path={customerManagementRoutesConstants.viewCustomer.path}
        element={<ViewCustomer />}
      />
      <Route
        path={customerManagementRoutesConstants.pageNotFound.path}
        element={<PageNotFound />}
      />
    </Routes>
  );
};

export default CustomerManagementRoutes;
