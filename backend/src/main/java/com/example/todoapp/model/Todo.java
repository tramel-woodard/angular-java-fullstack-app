package com.example.todoapp.model;

import jakarta.persistence.*;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String priority;

    // Constructors
    public Todo() {}

    public Todo(String name, String priority) {
        this.name = name;
        this.priority = priority;
    }

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getPriority() { return priority; }

    public void setPriority(String priority) { this.priority = priority; }
}
