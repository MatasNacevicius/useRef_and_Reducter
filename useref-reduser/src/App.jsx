import { useEffect } from "react";
import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { useReducer } from "react";
import {
  decrementFunction,
  incrementFunction,
  addMultipleSquares,
} from "./actions/actionObjects";
import { addMultipleSquaresReduser } from "./reducers/squareReducer";
import AddUsers from "./components/AddUsers";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";

function App() {
  // const [count, setCount] = useState(0);
  // const [counter, dispatchCounter] = useReducer(counterReducer, 0);
  // const [square, createSquare] = useReducer(squareReducer, []);
  // const [square1, removesquare] = useReducer(squareReducer, []);
  const [number, setNumber] = useState(0);
  const [square, dispatchSquares] = useReducer(addMultipleSquaresReduser, []);
  // const [usersList, setUsersList] = useState([]);
  // const allUsers = useRef([]);

  // useEffect(() => {
  //   axios.get("https://reqres.in/api/users?page=2").then((res) => {
  //     allUsers.current = res.data.data;
  //     setUsersList(
  //       allUsers.current.filter(
  //         (user) =>
  //           user.first_name === "George" || user.first_name === "Lindsay"
  //       )
  //     );
  //   });
  // }, []);

  return (
    <div className="App">
      {/* <div>
        <button onClick={() => setUsersList(allUsers.current)}>paspausk</button>
        {usersList.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name}</p>
          </div>
        ))}
      </div> */}
      {/* <button onClick={() => dispatchCounter(incrementFunction())}>
        Increment
      </button>
      <p>{counter}</p>
      <button onClick={() => dispatchCounter(decrementFunction())}>
        Decrement
      </button> */}
      {/* <button onClick={() => removesquare(removeSquare())}>
        remove Square
      </button>
      <button onClick={() => createSquare(addSquare())}>Add square</button>
      {square.map((square, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "purple",
            border: "2px solid black",
            margin: "10px",
          }}
        ></div>
      ))} */}
      {/* <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatchSquares(addMultipleSquares(number))}>
        add squares
      </button>
      {square.map((square, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "purple",
            border: "2px solid black",
            margin: "10px",
          }}
        ></div>
      ))} */}

      {/* <AddUsers /> */}
      <UseCallback />
      <UseMemo />
    </div>
  );
}

export default App;
