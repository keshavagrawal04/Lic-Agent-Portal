import { Routes, Route } from "react-router-dom";
import { authenticationRoutesConstants } from "./routesConstants";

const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route
        path={authenticationRoutesConstants.authentication.path}
        element={<authenticationRoutesConstants.authentication.element />}
      />
      <Route
        path={authenticationRoutesConstants.signUp.path}
        element={<authenticationRoutesConstants.signUp.element />}
      />
      <Route
        path={authenticationRoutesConstants.signIn.path}
        element={<authenticationRoutesConstants.signIn.element />}
      />
      <Route
        path={authenticationRoutesConstants.forgotPassword.path}
        element={<authenticationRoutesConstants.forgotPassword.element />}
      />
      <Route
        path={authenticationRoutesConstants.changePassword.path}
        element={<authenticationRoutesConstants.changePassword.element />}
      />
    </Routes>
  );
};

export default AuthenticationRoutes;
