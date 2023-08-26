import React from "react";
import { FiUsers } from "react-icons/fi";

const Sidebar = () => {
  const tabs = [
    {
      icon: <FiUsers size={32} />,
      content: "CUSTOMERS",
      route: "/",
    },
  ];

  return (
    <div className="bg-primaryGreen w-400 h-screen flex flex-col items-center py-12 rounded-e-md">
      <img src="/images/logo.png" />
      <div className="pt-28">
        {tabs.map(({ icon, content }, index) => (
          <button
            key={index}
            className="flex items-center text-2xl text-white bg-secondaryGreen shadow-3xl w-72 p-6 rounded-lg mb-12"
          >
            {icon}
            <span className="pl-10">{content}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
