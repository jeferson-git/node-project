import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../register/entities/user.entity';

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

  @Column({ type: 'varchar', length: 50 })
  payment: string;

  @OneToOne(() => User, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
