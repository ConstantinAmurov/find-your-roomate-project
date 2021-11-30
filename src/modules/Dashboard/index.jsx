import React from "react";

import { getUser } from "helpers/helpers";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const Home = () => {
  const user = getUser();
  if (user.type === "user") return <UserDashboard />;
  else return <AdminDashboard />;
};

export default Home;
