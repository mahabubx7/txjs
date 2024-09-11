import { AppDataSource } from '@config';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateTodoDto, ITodo, UpdateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';

/*
|============================================================================
| NOTE: 
| - The `AppDataSource` is used to define a class as a database entity.
| - To get the repository of the entity, 
    we use `AppDataSource.getRepository(<EntityClass>)`.
|============================================================================
*/
export class TodoService {
  constructor(private readonly model = AppDataSource.getRepository(Todo)) {}

  public async getTodos(): Promise<ITodo[]> {
    return await this.model.find();
  }

  public async getTodoById(todoId: string): Promise<ITodo | null> {
    return await this.model.findOne({ where: { id: todoId } });
  }

  public async addTodo(payload: CreateTodoDto): Promise<ITodo> {
    const todo = this.model.create(payload);
    return await this.model
      .save(todo)
      .then((doc) => {
        return doc;
      })
      .catch((err) => {
        throw err;
      });
  }

  public async updateTodo(
    todoId: string,
    todo: UpdateTodoDto,
  ): Promise<UpdateResult> {
    return await this.model.update(todoId, todo);
  }

  public async deleteTodo(todoId: string): Promise<DeleteResult | null> {
    return await this.model.delete(todoId);
  }
}
