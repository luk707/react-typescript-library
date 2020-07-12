import React, { FC, useState } from "react";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((i) => i + 1)}>Click me!</button>
    </>
  );
};
