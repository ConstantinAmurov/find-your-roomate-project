import { Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Router } from "react-router";
import { Route } from "react-router";
import history from "../../config/history";
import PrivateRoute from "../../helpers/privateRoutes"; // Private Routes, Will only accessible after Login

import AuthRoute from "../../helpers/authRoutes"; // Auth Routes, Will only accessible before login.
import Spinner from "../../components/Spinner/Spinner";
// Lazy loading of all the components.
const Dashboard = lazy(() => import('../Dashboard'));
const Matches = lazy(() => import('../Matches'));
const RequestedMatches = lazy(() => import('../Matches/Requested Matches'));
const IncomingMatches = lazy(() => import('../Matches/Incoming Matches'));
const Rooms = lazy(() => import('../Rooms'));
const Logout = lazy(() => import("../Dashboard/logout"));
const Login = lazy(() => import("../Login/index"));
const Register = lazy(() => import("../Register"));

const ForgotPassword = lazy(() => import("../ForgotPassword"));
const ResetPassword = lazy(() => import("../ResetPassword"));
const SetupAccount = lazy(() => import("../Setup"));

const User = lazy(() => import('../User'));
// Root routes
const Routes = () => (
  <Router history={history}>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/forgot-password" component={ForgotPassword} />
        <AuthRoute path="/reset-password" component={ResetPassword} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/user/:id" component={User} />
        <PrivateRoute exact path="/matches" component={Matches} />
        <PrivateRoute exact path="/requested-matches" component={RequestedMatches} />
        <PrivateRoute exact path="/incoming-matches" component={IncomingMatches} />
        <PrivateRoute exact path="/rooms" component={Rooms} />
        <PrivateRoute exact path="/setup-account" component={SetupAccount} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
