import React, { useState } from "react";
import { Portal } from "../pages";
import { Header, Sidebar } from "../components";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex xs:flex-col desktopMini:flex-row h-screen">
      <div className={`${sidebar ? "open" : null} sidebar`}>
        <Sidebar setSidebar={setSidebar} />
      </div>
      <main className="bg-[#F3F3F3] flex flex-1 flex-col overflow-x-auto">
        <Header setSidebar={setSidebar}>CUSTOMERS</Header>
        <Portal />
      </main>
    </div>
  );
};

export default Layout;
