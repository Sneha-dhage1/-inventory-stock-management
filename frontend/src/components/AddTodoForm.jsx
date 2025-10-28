import { useState } from "react";

export default function AddTodoForm({ setShowAdd, addTodo }) {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("Home");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = () => {
    if (!text.trim()) return;
    addTodo({
      id: Date.now(),
      text,
      label,
      priority,
      completed: false,
    });
    setShowAdd(false); // close form after adding
    setText("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Add Todo</h2>
        <button
          onClick={() => setShowAdd(false)}
          className="text-gray-500 text-2xl leading-none"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 space-y-5">
        <div>
          <label className="block mb-1 font-medium">To-do</label>
          <input
            type="text"
            placeholder="What needs to be done?"
            className="w-full p-3 border rounded-lg"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Label</label>
          <select
            className="w-full p-3 border rounded-lg"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          >
            <option>Home</option>
            <option>Work</option>
            <option>Food</option>
            <option>Music</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Priority</label>
          <input
            type="range"
            min="0"
            max="2"
            value={priority === "Low" ? 0 : priority === "Medium" ? 1 : 2}
            onChange={(e) =>
              setPriority(
                e.target.value === "0"
                  ? "Low"
                  : e.target.value === "1"
                  ? "Medium"
                  : "High"
              )
            }
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-sm font-medium text-gray-600 mt-1">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-4 text-lg font-medium rounded-b-3xl"
      >
        Done
      </button>
    </div>
  );
}
