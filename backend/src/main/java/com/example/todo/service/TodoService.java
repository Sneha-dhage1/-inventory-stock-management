package com.example.todo.service;

import com.example.todo.dto.CreateTodoDto;
import com.example.todo.dto.TodoDto;
import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TodoService {
    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public Page<TodoDto> list(int page, int size) {
        var pr = repo.findAll(PageRequest.of(page, size));
        List<TodoDto> dtos = pr.stream().map(this::toDto).collect(Collectors.toList());
        return new PageImpl<>(dtos, pr.getPageable(), pr.getTotalElements());
    }

    public TodoDto create(CreateTodoDto dto) {
        Todo t = Todo.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .completed(false)
                .build();
        var saved = repo.save(t);
        return toDto(saved);
    }

    public Optional<TodoDto> get(Long id) {
        return repo.findById(id).map(this::toDto);
    }

    public Optional<TodoDto> update(Long id, CreateTodoDto dto) {
        return repo.findById(id).map(t -> {
            t.setTitle(dto.getTitle());
            t.setDescription(dto.getDescription());
            var saved = repo.save(t);
            return toDto(saved);
        });
    }

    public boolean delete(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    private TodoDto toDto(Todo t) {
        return TodoDto.builder()
                .id(t.getId())
                .title(t.getTitle())
                .description(t.getDescription())
                .completed(t.getCompleted())
                .createdAt(t.getCreatedAt())
                .updatedAt(t.getUpdatedAt())
                .build();
    }
}
