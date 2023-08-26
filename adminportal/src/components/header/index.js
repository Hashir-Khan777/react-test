import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ children, setSidebar }) => {
  return (
    <div className="bg-white shadow-4xl flex items-center py-52 xs:px-11 tablet:px-17">
      <GiHamburgerMenu
        size={30}
        className="xs:mr-2 tablet:mr-11 hamburger"
        onClick={() => setSidebar(true)}
      />
      <p className="xs:text-3xl tablet:text-40 font-bold">{children}</p>
    </div>
  );
};

export default Header;
