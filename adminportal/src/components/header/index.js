import React from "react";

const Header = ({ children }) => {
  return (
    <div className="bg-white shadow-4xl flex items-center py-52 px-17">
      <p className="text-40 font-bold">{children}</p>
    </div>
  );
};

export default Header;
