import * as React from "react";

const LogoutBtn = ({
  setIsLogin,
  setIsLoggedin,
}: {
  setIsLogin(): any;
  setIsLoggedin(): any;
}) => (
  <button
    id="qsLogoutBtn"
    className="btn-margin logoutBtn"
    onClick={() => {
      setIsLogin(false);
      setIsLoggedin(false);
    }}
  >
    Log Out
  </button>
);

export default LogoutBtn;
