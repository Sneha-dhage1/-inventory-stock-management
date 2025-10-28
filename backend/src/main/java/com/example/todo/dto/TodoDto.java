package com.example.todo.dto;

import lombok.*;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodoDto {
    private Long id;
    private String title;
    private String description;
    private Boolean completed;
    private Instant createdAt;
    private Instant updatedAt;
}
