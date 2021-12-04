import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkAuthorization, checkEmailVerified, checkUserSetup } from '../helpers/helpers';
import { warnNotification } from '../components/Layouts/Public/NotificationsComponent/actions';
import { getLocalUser } from '../helpers/helpers';

import Home from '../modules/Home';
import Sidebar from '../modules/Sidebar';
import SetupAccount from '../modules/Setup';


const PrivateRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    const dispatch = useDispatch();
    if (checkAuthorization() === true) {
      if (checkUserSetup()) {
        if (checkEmailVerified() === false) {
          dispatch(warnNotification('Your Email is not verified'));
        }
        
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
      }
      else {
        dispatch(warnNotification("Your account is not setup, we redirected you"));
        return (<Route
          {...rest}
          render={props =>
            <div className="publicRoute">
              <SetupAccount type={getLocalUser().type} />
            </div>
          }
        />);
      }
    };
    return (
      <Redirect
        to={{
          pathname,
          state: { from: props.location },
        }}
      />
    );

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

export default PrivateRoute;;;;;