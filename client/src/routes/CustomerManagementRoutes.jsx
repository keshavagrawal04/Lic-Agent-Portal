import { Routes, Route } from "react-router-dom";
import { customerManagementRoutesConstants } from "./routesConstants";

const CustomerManagementRoutes = () => {
  return (
    <Routes>
      <Route
        path={customerManagementRoutesConstants.customerManagement.path}
        element={
          <customerManagementRoutesConstants.customerManagement.element />
        }
      />
      <Route
        path={customerManagementRoutesConstants.addCustomer.path}
        element={<customerManagementRoutesConstants.addCustomer.element />}
      />
      <Route
        path={customerManagementRoutesConstants.customers.path}
        element={<customerManagementRoutesConstants.customers.element />}
      />
      <Route
        path={customerManagementRoutesConstants.updateCustomer.path}
        element={<customerManagementRoutesConstants.updateCustomer.element />}
      />
      <Route
        path={customerManagementRoutesConstants.viewCustomer.path}
        element={<customerManagementRoutesConstants.viewCustomer.element />}
      />
    </Routes>
  );
};

export default CustomerManagementRoutes;
