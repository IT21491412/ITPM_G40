import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavLink, Outlet, Link } from "react-router-dom";
import "../css/layout.css";

const Layout = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="layoutContaner">
        <div className="navbarContaner">
          {/* navbar */}

          Nav bar eka hada ganna 😂😂
          <a href="/history">History</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/home">Translator</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={handleLogout}> Logout</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {user && user.email}
          {/* navbar */}
        </div>
        <div className="outletContaner">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
