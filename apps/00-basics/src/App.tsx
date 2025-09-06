import React from 'react';
import { Counter } from './examples/Counter';
import { TodoList } from './examples/TodoList';

export default function App() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">React — 00 Basics</h1>
      <p className="text-gray-600">Conceptos base: props, estado y eventos.</p>
      <Counter />
      <TodoList />
    </div>
  );
}

