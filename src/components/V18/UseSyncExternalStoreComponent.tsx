import { useSyncExternalStore } from "react";
import { todosStore } from "../../mockData/todoStore";

const UseSyncExternalStoreComponent = () => {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  return (
    <>
      <button onClick={() => todosStore.addTodo()} className="h6 mb-4 p-2">
        Add todo
      </button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 m-3 bg-slate-200 cursor-pointer"
            onClick={() => todosStore.subscribe}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseSyncExternalStoreComponent;
