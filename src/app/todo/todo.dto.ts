export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTodoDto = {
  title: string;
  completed?: boolean;
};

export type UpdateTodoDto = Partial<CreateTodoDto>;
