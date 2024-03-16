import { Routes, Route } from "react-router-dom";
import { authenticationRoutesConstants } from "./routesConstants";
import { Authentication } from "../components";
import { PageNotFound } from "../components";
import {
  ForgotPassword,
  ChangePassword,
  SignUp,
  SignIn,
} from "../pages/Authentication";

const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route
        path={authenticationRoutesConstants.signUp.path}
        element={
          <Authentication>
            <SignUp />
          </Authentication>
        }
      />
      <Route
        path={authenticationRoutesConstants.signIn.path}
        element={
          <Authentication>
            <SignIn />
          </Authentication>
        }
      />
      <Route
        path={authenticationRoutesConstants.forgotPassword.path}
        element={
          <Authentication>
            <ForgotPassword />
          </Authentication>
        }
      />
      <Route
        path={authenticationRoutesConstants.changePassword.path}
        element={
          <Authentication>
            <ChangePassword />
          </Authentication>
        }
      />
      <Route
        path={authenticationRoutesConstants.pageNotFound.path}
        element={<PageNotFound />}
      />
    </Routes>
  );
};

export default AuthenticationRoutes;
