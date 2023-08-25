import React from "react";
import { Portal } from "../pages";
import { Header, Sidebar } from "../components";

const Layout = () => {
  return (
    <div className="flex">
      <aside className="flex xs:flex-col desktopMini:flex-row h-screen">
        <Sidebar />
      </aside>
      <main className="flex flex-1 flex-col overflow-x-auto">
        <Header />
        <Portal />
      </main>
    </div>
  );
};

export default Layout;
