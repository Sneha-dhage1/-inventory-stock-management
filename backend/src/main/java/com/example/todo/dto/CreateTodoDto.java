package com.example.todo.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateTodoDto {
    @NotBlank
    private String title;
    private String description;
}
