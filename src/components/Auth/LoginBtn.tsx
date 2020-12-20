import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_USER = gql`
  query getUser {
    users(where: { id: { _eq: "6" }, name: { _eq: "Giorno" } }) {
      id
      name
      last_seen
    }
  }
`;

const LoginBtn = ({
  setIsLogin,
  setIsLoggedin,
  isLoggedin,
}: {
  setIsLogin: any;
  setIsLoggedin: any;
  isLoggedin: any;
}) => {
  const { loading, error, data } = useQuery<any>(GET_USER);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return isLoggedin ? (
    <div>{`Welcome,${data.users[0].name}`}</div>
  ) : (
    <div className="login">
      <div>
        <p>Enter your Id:</p>
        <input />
      </div>
      <div>
        <p>Enter your UserName:</p>
        <input />
      </div>
      <button
        onClick={() => {
          setIsLoggedin(true);
          setIsLogin(true);
        }}
      >
        Login
      </button>
    </div>
  );
};
export default LoginBtn;
