import React from "react";
import history from "../config/history";
import { useLocation } from "react-router";
import { getOwner, getUser } from "api/Users API";

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

export const getLocalUser = () => JSON.parse(window.localStorage.getItem('user'));

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
  const user = getLocalUser();
  if (user.is_setup) {
    return true;
  }
  return false;
};

export const checkEmailVerified = () => {
  const user = getLocalUser();
  if (user.email_verified_at)
    return true;
  return false;
};

export const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const refreshUser = async (id, type) => {
  switch (type) {
    case "user":
      const user = await getUser(id);
      setUser(user);
      break;
    case "owner":
      const owner = await getOwner(id);
      setUser(owner);
      break;
  }


};