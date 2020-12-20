import * as React from "react";

const LogoutBtn = () => (
  <button
    id="qsLogoutBtn"
    className="btn-margin logoutBtn"
    onClick={() => {
      logoutHandler();
    }}
  >
    Log Out
  </button>
);

export default LogoutBtn;
