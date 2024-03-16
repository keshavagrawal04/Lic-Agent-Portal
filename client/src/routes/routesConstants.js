export const appRoutesConstants = {
  home: { path: "/" },
  pageNotFound: { path: "*" },
  authentication: {
    path: "/authentication/*",
  },
  customerManagement: {
    path: "/customer-management/*",
  },
};

export const authenticationRoutesConstants = {
  signIn: { path: "/signin" },
  signUp: { path: "/signup" },
  forgotPassword: { path: "/forgot-password" },
  changePassword: { path: "/change-password" },
  pageNotFound: { path: "*" },
};

export const customerManagementRoutesConstants = {
  customerManagement: { path: "/" },
  customers: { path: "/customers" },
  addCustomer: { path: "/add-customer" },
  updateCustomer: {
    path: "/update-customer/:customerId",
  },
  viewCustomer: { path: "/view-customer/:customerId" },
};
