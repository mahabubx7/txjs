import { Body, Get, Post, Route, Tags } from 'tsoa';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Route('todo')
@Tags('Todo')
export class TodoController {
  private todoService: TodoService = new TodoService();

  @Get('/')
  public async getTodos(): Promise<Todo[]> {
    return await this.todoService.getTodos();
  }

  @Post('/')
  public async addTodo(
    @Body() todo: Omit<Todo, '_id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Todo> {
    // Use the todo parameter here
    return await this.todoService.addTodo(todo);
  }
}
