import React, { useState, useEffect } from "react";

export function Inc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => console.log(count), 1500);
    return () => clearInterval(interval);
    /* eslint-disable-next-line */
  }, []);

  return (
    <button onClick={() => setCount(count => count + 1)}>Increment</button>
  );
}

export default Inc;
