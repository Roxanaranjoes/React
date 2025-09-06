import React from 'react';

type Todo = { id: number; text: string; done: boolean };

export function TodoList() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [text, setText] = React.useState('');
  const [filter, setFilter] = React.useState<'all' | 'done' | 'open'>('all');

  const add = () => {
    if (!text.trim()) return;
    setTodos((t) => [...t, { id: Date.now(), text: text.trim(), done: false }]);
    setText('');
  };
  const toggle = (id: number) => setTodos((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

  const visible = todos.filter((t) => (filter === 'all' ? true : filter === 'done' ? t.done : !t.done));

  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">TodoList</h2>
      <div className="mb-2 flex gap-2">
        <input
          aria-label="Nueva tarea"
          className="flex-1 rounded border px-2 py-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="rounded bg-green-600 px-3 py-1 text-white" onClick={add}>
          Añadir
        </button>
      </div>
      <div className="mb-3 flex gap-2 text-sm">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'font-semibold' : ''}>Todos</button>
        <button onClick={() => setFilter('open')} className={filter === 'open' ? 'font-semibold' : ''}>Pendientes</button>
        <button onClick={() => setFilter('done')} className={filter === 'done' ? 'font-semibold' : ''}>Hechos</button>
      </div>
      <ul className="list-disc pl-6">
        {visible.map((t) => (
          <li key={t.id}>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span className={t.done ? 'line-through' : ''}>{t.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

