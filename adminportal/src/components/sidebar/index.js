import React from "react";
import { FiUsers } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Sidebar = ({ setSidebar }) => {
  const tabs = [
    {
      icon: <FiUsers size={32} />,
      content: "CUSTOMERS",
      route: "/",
    },
  ];

  return (
    <div className="bg-primaryGreen xs:w-52 tablet:w-400 h-screen flex flex-col items-center py-12 rounded-e-md">
      <IoMdCloseCircleOutline
        size={35}
        className="text-white self-end mb-7 mr-5 -mt-5 close-button"
        onClick={() => setSidebar(false)}
      />
      <img src="/images/logo.png" className="xs:w-40 tablet:w-auto" />
      <div className="pt-28">
        {tabs.map(({ icon, content }, index) => (
          <button
            key={index}
            className="flex items-center xs:text-lg tablet:text-2xl text-white bg-secondaryGreen shadow-3xl xs:w-40 tablet:w-72 xs:p-3 tablet:p-6 rounded-lg mb-12"
          >
            {icon}
            <span className="xs:pl-3 tablet:pl-10">{content}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
