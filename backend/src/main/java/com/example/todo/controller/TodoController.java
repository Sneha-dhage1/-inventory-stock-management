package com.example.todo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    // Temporary in-memory list (acts like a fake database)
    private List<Map<String, Object>> todos = new ArrayList<>();

    // Constructor with some sample data
    public TodoController() {
        Map<String, Object> todo1 = new HashMap<>();
        todo1.put("id", 1);
        todo1.put("title", "Learn Spring Boot");
        todo1.put("completed", false);

        Map<String, Object> todo2 = new HashMap<>();
        todo2.put("id", 2);
        todo2.put("title", "Build Inventory Management App");
        todo2.put("completed", true);

        todos.add(todo1);
        todos.add(todo2);
    }

    // ✅ GET — returns all todos
    @GetMapping
    public List<Map<String, Object>> getAllTodos() {
        return todos;
    }

    // ✅ POST — add a new todo
    @PostMapping
    public Map<String, Object> addTodo(@RequestBody Map<String, Object> todo) {
        todo.put("id", todos.size() + 1);
        todos.add(todo);
        return todo;
    }

    // ✅ GET by ID
    @GetMapping("/{id}")
    public Map<String, Object> getTodoById(@PathVariable int id) {
        return todos.stream()
                .filter(t -> (int) t.get("id") == id)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Todo not found"));
    }

    // ✅ DELETE by ID
    @DeleteMapping("/{id}")
    public String deleteTodoById(@PathVariable int id) {
        todos.removeIf(t -> (int) t.get("id") == id);
        return "Todo deleted with ID: " + id;
    }
}
