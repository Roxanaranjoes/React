import React from 'react';

export function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">Counter</h2>
      <div className="flex items-center gap-2">
        <button className="rounded bg-blue-600 px-3 py-1 text-white" onClick={() => setCount((c) => c - 1)}>-</button>
        <span aria-live="polite" className="w-12 text-center font-mono">{count}</span>
        <button className="rounded bg-blue-600 px-3 py-1 text-white" onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </section>
  );
}

