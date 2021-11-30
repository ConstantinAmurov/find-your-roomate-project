import React from "react";
import history from "../config/history";
import { useLocation } from "react-router";

export const DisplayFormikState = (props) => (
  <div style={{ margin: "1rem 0" }}>
    <h3 style={{ fontFamily: "monospace" }}>&nbsp;</h3>
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem",
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

export const browserRedirect = (location) => {
  history.push(location);
};


export const setAuthToken = (value) => window.localStorage.setItem('token', value);
export const setUser = (value) => window.localStorage.setItem('user', JSON.stringify(value));

export const getUser = () => JSON.parse(window.localStorage.getItem('user'));

export const deleteUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};
export const checkAuthorization = () => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    return true;
  }
  return false;
};


export const checkUserSetup = () => {
  const user = getUser();
  if (user.is_setup) {
    return true;
  }
  return false;
};

export const checkEmailVerified = () => {
  const user = getUser();
  if (user.email_verified_at)
    return true;
  return false;
};

export const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};
