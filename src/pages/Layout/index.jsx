import React from "react";
import { Navbar, Sidebar } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "93vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
