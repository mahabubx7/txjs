import { model, Schema } from 'mongoose';

export interface Todo {
  _id?: string;
  title: string;
  completed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const todoSchema = new Schema<Todo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const TodoModel = model<Todo>('Todo', todoSchema);
