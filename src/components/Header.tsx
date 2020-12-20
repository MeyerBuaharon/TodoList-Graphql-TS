import * as React from "react";
import LoginBtn from "./Auth/LoginBtn";
import LogoutBtn from "./Auth/LogoutBtn";

const Header = () => (
  <nav className="m-bottom-0 topNav">
    GraphQL Todo List App
    <LogoutBtn />
    <LoginBtn />
  </nav>
);

export default Header;
