import React, { useState } from "react";
import LoginBtn from "./Auth/LoginBtn";
import LogoutBtn from "./Auth/LogoutBtn";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <nav className="m-bottom-0 topNav">
      GraphQL Todo List App
      {isLogin && (
        <LogoutBtn setIsLogin={setIsLogin} setIsLoggedin={setIsLoggedin} />
      )}
      <LoginBtn
        setIsLogin={setIsLogin}
        setIsLoggedin={setIsLoggedin}
        isLoggedin={isLoggedin}
      />
    </nav>
  );
};

export default Header;
