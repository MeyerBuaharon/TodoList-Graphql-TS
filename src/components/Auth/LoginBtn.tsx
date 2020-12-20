import * as React from "react";

const LoginBtn = () => (
  <button
    id="qsLoginBtn"
    className="btn-margin LoginBtn"
    onClick={() => {
      logoutHandler();
    }}
  >
    Log Out
  </button>
);

export default LoginBtn;
