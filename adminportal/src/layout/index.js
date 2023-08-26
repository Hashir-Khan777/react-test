import React from "react";
import { Portal } from "../pages";
import { Header, Sidebar } from "../components";

const Layout = () => {
  return (
    <div className="flex xs:flex-col desktopMini:flex-row h-screen">
      <div>
        <Sidebar />
      </div>
      <main className="bg-gray flex flex-1 flex-col overflow-x-auto">
        <Header>CUSTOMERS</Header>
        <Portal />
      </main>
    </div>
  );
};

export default Layout;
