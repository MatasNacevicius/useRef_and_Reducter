import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseCallback = () => {
  const [text, setText] = useState(16);

  const hello = useCallback(() => {
    console.log("hello");
  }, []);
  useEffect(() => {
    hello();
  }, [hello]);

  return (
    <div>
      <p
        onClick={() => setText((prev) => (prev === 16 ? 40 : 16))}
        style={{ fontSize: text + "px" }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sunt
        pariatur laudantium eaque accusamus aspernatur asperiores dolorum,
        eligendi molestias fugit esse earum, fuga omnis corporis voluptatem
        dolore recusandae est voluptatibus!
      </p>
    </div>
  );
};

export default UseCallback;
