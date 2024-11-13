import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButon from "./LogoutButton";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButon />
    </div>
  );
};

export default Sidebar;
