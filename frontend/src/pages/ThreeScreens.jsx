import { useState } from "react";
import EmptyTodos from "../components/EmptyTodos";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";
import { toast } from "react-toastify";

export default function ThreeScreens() {
  const [todos, setTodos] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  // ✅ Add new todo
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
    toast.success("✅ Todo added!");
  };

  // ✅ Toggle complete
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
    toast.info("✏️ Todo updated!");
  };

  // ✅ Delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    toast.error("🗑️ Todo deleted!");
  };

  return (
    <div className="flex gap-6">
      {/* LEFT SCREEN */}
      <div className="w-[300px] h-[600px] bg-white rounded-3xl shadow-lg relative flex flex-col">
        <h1 className="text-2xl font-bold p-4">Todos</h1>
        <div className="flex-1 flex items-center justify-center">
          {todos.length === 0 ? (
            <EmptyTodos />
          ) : (
            <p className="text-gray-500">
              You have <span className="font-bold">{todos.length}</span> todos
            </p>
          )}
        </div>
      </div>

      {/* MIDDLE SCREEN */}
      <div className="w-[300px] h-[600px] bg-white rounded-3xl shadow-lg p-6 flex flex-col relative">
        <h1 className="text-2xl font-bold mb-4">Todos</h1>
        <div className="space-y-4 flex-1 overflow-y-auto">
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      </div>

      {/* RIGHT SCREEN */}
      <div className="w-[300px] h-[600px] bg-white rounded-3xl shadow-lg flex flex-col relative">
        {showAdd ? (
          <AddTodoForm
            setShowAdd={setShowAdd}
            addTodo={addTodo}
          />
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <button
              onClick={() => setShowAdd(true)}
              className="bg-blue-600 text-white w-16 h-16 rounded-full text-4xl flex items-center justify-center shadow-lg"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
