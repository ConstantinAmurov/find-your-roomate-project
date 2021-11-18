import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkAuthorization } from '../helpers/helpers';

import Home from '../modules/Home';
import Sidebar from '../modules/Sidebar';

const PrivateRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    if (checkAuthorization() === true) {
      return (
        <Route
          {...rest}
          render={props =>
            <div className="privateRoute">
              <Home></Home>
              <Sidebar />
              <Component {...rest} {...props} />
            </div>
          }
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname,
            state: { from: props.location },
          }}
        />
      );
    }
  };
  return (
    <Routes />
  );
};

PrivateRoute.defaultProps = { redirect: '/login' };

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default PrivateRoute;