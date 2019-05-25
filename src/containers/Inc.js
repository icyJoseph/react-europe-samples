import React, { useState, useEffect, useRef } from "react";

export function Inc() {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count;
  useEffect(() => {
    const interval = setInterval(() => console.log(countRef.current), 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <button onClick={() => setCount(count => count + 1)}>Increment</button>
  );
}

export default Inc;
