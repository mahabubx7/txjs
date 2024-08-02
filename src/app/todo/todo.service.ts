import { Todo, TodoModel } from './todo.model';

export class TodoService {
  constructor(private readonly model = TodoModel) {}

  public async getTodos(): Promise<Todo[]> {
    return await this.model.find();
  }

  public async addTodo(payload: Todo): Promise<Todo> {
    const todo = new this.model(payload);
    return await todo
      .save()
      .then((doc) => {
        return doc;
      })
      .catch((err) => {
        throw err;
      });
  }
}
