import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../register/entities/user.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'time' })
  init_hour: string;

  @Column({ type: 'time' })
  final_hour: string;

  @Column({ type: 'date' })
  date_work: string;

  @ManyToOne(() => User, (user) => user.schedule)
  @JoinColumn()
  users: User;
}
