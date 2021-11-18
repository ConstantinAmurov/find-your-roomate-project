import { Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Router } from "react-router";
import history from "../../config/history";
import PrivateRoute from "../../helpers/privateRoutes"; // Private Routes, Will only accessible after Login
import AuthRoute from "../../helpers/authRoutes"; // Auth Routes, Will only accessible before login.

// Lazy loading of all the components.
const Dashboard = lazy(() => import('../Dashboard'));
const Matches = lazy(() => import('../Matches'));
const Rooms = lazy(() => import('../Rooms'));
const Logout = lazy(() => import("../Dashboard/logout"));
const Login = lazy(() => import("../Login"));
const Register = lazy(() => import("../Register"));
const ConfirmAccount = lazy(() => import("../Register/ConfirmAccount"));
const ForgotPassword = lazy(() => import("../ForgotPassword"));
const CreateNewPassword = lazy(() => import("../CreateNewPassword"));
const SetupAccount = lazy(() => import("../Setup"));
// Root routes
const Routes = () => (
  <Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/confirm-account" component={ConfirmAccount} />
        <AuthRoute path="/forgot-password" component={ForgotPassword} />
        <AuthRoute path="/setup-account" component={SetupAccount} />
        <AuthRoute path="/reset-password" component={CreateNewPassword} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/matches" component={Matches} />
        <PrivateRoute exact path="/rooms" component={Rooms} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
