import { BadRequestException } from '@/config/exceptions';
import { isValidUuid } from '@utils';
import { Body, Delete, Get, Path, Post, Put, Route, Tags } from 'tsoa';
import { CreateTodoDto, ITodo, UpdateTodoDto } from './todo.dto';
import { TodoService } from './todo.service';

@Route('todo')
@Tags('Todo')
export class TodoController {
  private todoService: TodoService = new TodoService();

  @Get('/')
  public async getTodos(): Promise<ITodo[]> {
    return await this.todoService.getTodos();
  }

  @Get('/{id}')
  public async getTodoById(@Path('id') todoId: string): Promise<ITodo | null> {
    // if (!isValidObjectId(todoId))
    //   throw new BadRequestException('Invalid ID', {
    //     cause: 'ID is not a valid ObjectId',
    //   });
    return await this.todoService.getTodoById(todoId);
  }

  @Post('/')
  public async addTodo(@Body() todo: CreateTodoDto): Promise<ITodo> {
    return await this.todoService.addTodo(todo);
  }

  @Put('/{id}')
  public async updateTodo(
    @Path('id') todoId: string,
    @Body() todo: UpdateTodoDto,
  ) {
    // Use the todo parameter here
    if (!isValidUuid(todoId))
      throw new BadRequestException('Invalid ID', {
        cause: 'ID is not a valid UUID!',
      });
    return await this.todoService.updateTodo(todoId, todo);
  }

  @Delete('/{id}')
  public async deleteTodo(@Path('id') todoId: string) {
    if (!isValidUuid(todoId))
      throw new BadRequestException('Invalid ID', {
        cause: 'ID is not a valid UUID!',
      });
    return await this.todoService.deleteTodo(todoId);
  }
}
