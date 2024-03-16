import AuthenticationRoutes from "./AuthenticationRoutes";
import CustomerManagementRoutes from "./CustomerManagementRoutes";
import { PageNotFound } from "../components";
import {
  Authentication,
  ForgotPassword,
  ChangePassword,
  SignUp,
  SignIn,
} from "../pages/Authentication";
import {
  CustomerManagement,
  AddCustomer,
  UpdateCustomer,
  ViewCustomer,
  Customers,
} from "../pages/CustomerManagement";

export const appRoutesConstants = {
  home: { path: "/", element: "Home" },
  pageNotFound: { path: "*", element: PageNotFound },
  authentication: {
    path: "/authentication/*",
    element: AuthenticationRoutes,
  },
  customerManagement: {
    path: "/customer-management/*",
    element: CustomerManagementRoutes,
  },
};

export const authenticationRoutesConstants = {
  authentication: { path: "/", element: Authentication },
  signIn: { path: "/sign-in", element: SignIn },
  signUp: { path: "/sign-up", element: SignUp },
  forgotPassword: { path: "/forgot-password", element: ForgotPassword },
  changePassword: { path: "/change-password", element: ChangePassword },
};

export const customerManagementRoutesConstants = {
  customerManagement: { path: "/", element: CustomerManagement },
  customers: { path: "/customers", element: Customers },
  addCustomer: { path: "/add-customer", element: AddCustomer },
  updateCustomer: {
    path: "/update-customer/:customerId",
    element: UpdateCustomer,
  },
  viewCustomer: { path: "/view-customer/:customerId", element: ViewCustomer },
};
