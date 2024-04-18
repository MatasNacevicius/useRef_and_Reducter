import React, { useReducer } from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { getAllUsers, lowerSort, highSort } from "../actions/actionObjects";
import { getAllUsersReduser } from "../reducers/usersReducer";
import axios from "axios";

const AddUsers = () => {
  const [usersList, dispatchUsers] = useReducer(getAllUsersReduser, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatchUsers(getAllUsers(res.data)));
  }, []);

  return (
    <div>
      <button onClick={() => dispatchUsers(lowerSort())}>sort a-z</button>
      <button onClick={() => dispatchUsers(highSort())}>sort z-a</button>
      <button>sort zip asc</button>
      <button>sort zip desc</button>
      {console.log(usersList)}
      {usersList.map((users) => (
        <div key={users.id}>
          <span>{users.id}. </span>
          {users.name}
        </div>
      ))}
    </div>
  );
};

export default AddUsers;
