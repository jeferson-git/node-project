import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  contractDate: string;

  @Column({ type: 'varchar', length: 50 })
  officeHour: string;

  @Column({ type: 'varchar', length: 25 })
  jobFunction: string;

  @Column({ type: 'float' })
  payment: number;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}
