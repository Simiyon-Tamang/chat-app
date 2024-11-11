import React from "react";
import SearchInput from "./SearchInput";
import Conversation from "./Conversation";
import LogoutButon from "./LogoutButton";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversation />
      <LogoutButon />
    </div>
  );
};

export default Sidebar;
