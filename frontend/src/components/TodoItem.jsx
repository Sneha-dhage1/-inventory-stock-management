export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";
      case "Medium":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-blue-100 text-blue-600";
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-sm flex justify-between items-center">
      <div>
        <p
          className={`font-semibold ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-gray-500">{todo.label}</span>
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${getPriorityColor(
              todo.priority
            )}`}
          >
            {todo.priority}
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
