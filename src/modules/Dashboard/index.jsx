import React from "react";

import { getLocalUser } from "helpers/helpers";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const Home = () => {
  const user = getLocalUser();
  if (user.type === "user") return <UserDashboard />;
  else return <AdminDashboard />;
};

export default Home;
