import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoService } from '../../services/todo.service';
import { Todo, PRIORITIES } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, NgForOf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  form: Todo = { name: '', priority: 'Low' };
  priorities = PRIORITIES;
  editingId?: number;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
      this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getAll().subscribe(todos => this.todos = todos);
  }

  save(): void {
    if (this.editingId) {
      this.todoService.update({
        ...this.form,
        id: this.editingId
      }).subscribe(() => {
        this.reset();
        this.loadTodos();
      })
    } else {
      this.todoService.add(this.form).subscribe(() => {
        this.reset();
        this.loadTodos();
      })
    }
  }

  edit(todo: Todo): void {
    this.form = { name: todo.name, priority: todo.priority };
    this.editingId = todo.id;
  }

  delete(id: number): void {
    this.todoService.delete(id).subscribe(() => this.loadTodos());
  }

  reset(): void {
    this.form = { name: '', priority: 'Low' };
    this.editingId = undefined;
  }
}
