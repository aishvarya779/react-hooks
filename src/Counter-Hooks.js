import React, { useState, useEffect } from 'react';
// functional component
const CounterHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times by Hook`;
  });
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter App Using Hooks</h2>
      <button
        type="button"
        className="btn btn-raised btn-info"
        onClick={increment}
      >
        Clicked {count} times
      </button>
    </div>
  );
};

export default CounterHooks;
