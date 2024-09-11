import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/*
|============================================================================
| NOTE: 
| - The @Entity() decorator is used to define a class as a database entity.
| - Must provide database cloumn type for each field. Otherwise, it will
    occur an error. This is minor issue for TSoa x TypeORM.
|============================================================================
*/

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ default: false, type: 'boolean' })
  completed: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
