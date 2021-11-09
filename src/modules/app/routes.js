import { Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Router } from "react-router";
import history from "../../config/history";
import PrivateRoute from "../../helpers/privateRoutes"; // Private Routes, Will only accessible after Login
import AuthRoute from "../../helpers/authRoutes"; // Auth Routes, Will only accessible before login.

// Lazy loading of all the components.
const Home = lazy(() => import("../Home"));
const Logout = lazy(() => import("../Home/logout"));
const Login = lazy(() => import("../Login"));
const Register = lazy(() => import("../Register"));
const ConfirmAccount = lazy(() => import("../Register/ConfirmAccount"));
const ForgotPassword = lazy(() => import("../ForgotPassword"));
const CreateNewPassword = lazy(() => import("../CreateNewPassword"));
// Root routes
const Routes = () => (
  <Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/confirm-account" component={ConfirmAccount} />
        <AuthRoute path="/forgot-password" component={ForgotPassword} />
        <AuthRoute path="/reset-password" component={CreateNewPassword} />

        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
