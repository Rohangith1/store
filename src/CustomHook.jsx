import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Fetch = () => {
    const [users] = useFetch();
    console.log(users)
  
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((userInfo) => {
          return (
            <li key={userInfo.id}>
              {" "}
              <a href={userInfo.html_url}>{userInfo.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fetch;
