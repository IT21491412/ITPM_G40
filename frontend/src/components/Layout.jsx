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
        {/* navbar */}
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="logo">CeyLex</label>
          <ul>
            <li><a class="active" href="/home">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/history">History</a></li>
            <li><button onClick={handleLogout}> Logout</button></li>
            <li>{user && user.email}</li>
          </ul>
        </nav>
        {/* navbar */}
        <div className="outletContaner">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
