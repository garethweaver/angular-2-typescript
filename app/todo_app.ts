import {Component} from 'angular2/core'
import {Todo} from './todo'
import {TodoList} from './todo_list'
import {TodoForm} from './todo_form'

@Component({
  selector: 'todo-app',
  templateUrl: './app/todo_app.html',
  directives: [TodoList, TodoForm]
})

export class TodoApp {
  todos: Todo[] = [
    { text: 'learn angular', done: true },
    { text: 'build an app', done: false }
  ]

  get remaining() {
    return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0)
  }

  addTask(task: Todo) {
      this.todos.push(task)
  }
}
